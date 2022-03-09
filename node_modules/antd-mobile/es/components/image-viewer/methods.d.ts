import { ImageViewerProps, MultiImageViewerProps } from './image-viewer';
export declare type ImageViewerHandler = {
    close: () => void;
};
export declare function showImageViewer(props: Omit<ImageViewerProps, 'visible'>): {
    close: () => void;
};
export declare function showMultiImageViewer(props: Omit<MultiImageViewerProps, 'visible'>): {
    close: () => void;
};
export declare function clearImageViewer(): void;
