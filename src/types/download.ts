export interface CommentData {
  username: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface DownloadOptions {
  format: 'png' | 'jpg';
  quality?: number;
  scale?: number;
}

export interface CustomDownloadOptions extends DownloadOptions {
  includeFrame?: boolean;
  customDimensions?: { width: number; height: number };
}

export interface DownloadResult {
  success: boolean;
  error?: string;
  filename?: string;
  size?: number;
}

export type ImageFormat = 'png' | 'jpg';
export type DownloadFormat = ImageFormat | 'zip';
