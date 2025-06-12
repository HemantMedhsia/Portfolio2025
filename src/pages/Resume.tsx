import { useCallback, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import pdf from "/HemantMedhsiaUpdatedResume.pdf";
import { motion } from 'framer-motion';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const options = {
    cMapUrl: '/cmaps/',
    standardFontDataUrl: '/standard_fonts/',
};

const resizeObserverOptions = {};
const maxWidth = 800;

type PDFFile = string | File | null;

export default function Resume() {
    const [file] = useState<PDFFile>(pdf);
    const [numPages, setNumPages] = useState<number>();
    const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>();

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const [entry] = entries;
        if (entry) {
            setContainerWidth(entry.contentRect.width);
        }
    }, []);

    useResizeObserver(containerRef, resizeObserverOptions, onResize);

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = 'HemantMedhsiaUpdatedResume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="min-h-screen bg-black px-4 flex flex-col items-center justify-center">

            {/* Down cue */}
            <motion.div
                className="text-teal-400 mb-8 text-2xl animate-bounce flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                onClick={handleDownloadResume}
            >
                <button className="bg-white/10 backdrop-blur-md border border-indigo-400 text-indigo-200 font-medium px-5 py-2 rounded-xl rounded-br-xl shadow-lg hover:bg-indigo-200/60 hover:text-black transition-all duration-300 tracking-widest cursor-pointer text-sm active:bg-indigo-200/60 active:text-black">
                    DOWNLOAD RESUME ↓
                </button>
            </motion.div>

            <div
                ref={setContainerRef}
                className="relative w-full m-w-4xl flex flex-col items-center justify-center backdrop-blur-sm rounded-xl shadow-2xl "
            >

                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                    options={options}
                    className="w-full flex flex-col items-center gap-8"
                >
                    {Array.from(new Array(numPages), (_el, index) => (
                        <div
                            key={`page_wrapper_${index}`}
                            className="relative transition-transform hover:scale-[1.02] duration-300 ease-in-out shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-2xl overflow-hidden"
                        >
                            <Page
                                pageNumber={index + 1}
                                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
                                className="rounded-xl opacity-60 "
                            />
                            <span className="absolute top-3 right-3 text-xs border font-semibold text-pink-800 bg-pink-300 px-2 py-1 rounded-full">
                                Page {index + 1}
                            </span>
                        </div>
                    ))}
                </Document>
            </div>
        </div>
    );
}
