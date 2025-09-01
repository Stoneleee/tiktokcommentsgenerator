import { CommentData, DownloadOptions, DownloadResult } from "@/types/download";
import html2canvas from "html2canvas-pro";
import JSZip from "jszip";
import { useCallback, useRef } from "react";

export const useCommentDownload = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  const downloadSingleImage = useCallback(
    async (
      commentData: CommentData,
      options: DownloadOptions
    ): Promise<DownloadResult> => {
      if (!previewRef.current) {
        console.error("Preview element not found");
        return { success: false, error: "Preview element not found" };
      }

      try {
        // Show loading state
        const originalStyle = previewRef.current.style.pointerEvents;
        previewRef.current.style.pointerEvents = "none";

        // Configure html2canvas options
        const canvasOptions = {
          scale: options.scale || 2, // Higher scale for better quality
          useCORS: true,
          allowTaint: true,
          backgroundColor: null,
          width: 320,
          height: 650,
          logging: false, // Disable logging for better performance
        };

        // Capture the preview element
        const canvas = await html2canvas(previewRef.current, canvasOptions);

        // Convert to blob
        const blob = await new Promise<Blob>((resolve, reject) => {
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error("Failed to create blob"));
              }
            },
            `image/${options.format === "jpg" ? "jpeg" : options.format}`,
            options.quality || 0.9
          );
        });

        // Create download link
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;

        // Generate filename with sanitized username
        link.download = `tiktok-comments-generator-${Date.now()}.${
          options.format
        }`;

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cleanup
        URL.revokeObjectURL(url);

        // Restore original style
        previewRef.current.style.pointerEvents = originalStyle;

        return {
          success: true,
          filename: link.download,
          size: blob.size,
        };
      } catch (error) {
        console.error("Error downloading image:", error);

        // Restore original style on error
        if (previewRef.current) {
          previewRef.current.style.pointerEvents = "auto";
        }

        return {
          success: false,
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    },
    []
  );

  const downloadMultipleFormats = useCallback(
    async (
      commentData: CommentData,
      formats: ("png" | "jpg")[] = ["png", "jpg"]
    ): Promise<DownloadResult> => {
      if (!previewRef.current) {
        console.error("Preview element not found");
        return { success: false, error: "Preview element not found" };
      }

      try {
        // Show loading state
        const originalStyle = previewRef.current.style.pointerEvents;
        previewRef.current.style.pointerEvents = "none";

        const zip = new JSZip();
        const timestamp = Date.now();

        // Generate images for each format
        for (const format of formats) {
          const canvasOptions = {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: null,
            width: 320,
            height: 650,
          };

          const canvas = await html2canvas(previewRef.current, canvasOptions);

          const blob = await new Promise<Blob>((resolve, reject) => {
            canvas.toBlob(
              (blob) => {
                if (blob) {
                  resolve(blob);
                } else {
                  reject(new Error(`Failed to create ${format} blob`));
                }
              },
              `image/${format === "jpg" ? "jpeg" : format}`,
              0.9
            );
          });

          const filename = `tiktok-comments-generator-${timestamp}.${format}`;
          zip.file(filename, blob);
        }

        // Generate and download zip file
        const zipBlob = await zip.generateAsync({
          type: "blob",
          compression: "DEFLATE",
          compressionOptions: { level: 6 },
        });

        const url = URL.createObjectURL(zipBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `tiktok-comments-generator-${timestamp}.zip`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

        // Restore original style
        previewRef.current.style.pointerEvents = originalStyle;

        return {
          success: true,
          filename: link.download,
          size: zipBlob.size,
        };
      } catch (error) {
        console.error("Error downloading multiple formats:", error);

        // Restore original style on error
        if (previewRef.current) {
          previewRef.current.style.pointerEvents = "auto";
        }

        return {
          success: false,
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
        };
      }
    },
    []
  );

  return {
    previewRef,
    downloadSingleImage,
    downloadMultipleFormats,
  };
};
