import { Injectable } from '@nestjs/common';
@Injectable()
export class IntercambioService {
  extraerVideoId(url: string): string | null {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    const match = url.match(regex);
    return (match && match[1].length === 11) ? match[1] : null;
  }
}