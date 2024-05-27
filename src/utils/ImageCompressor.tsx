import { Base64 } from 'js-base64';
import pako from 'pako';

// Helper function to convert a Base64 string to a Uint8Array
const base64ToUint8Array = (base64) => {
    const binaryString = Base64.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
};

// Helper function to convert a Uint8Array to a Base64 string
const uint8ArrayToBase64 = (uint8Array) => {
    const binaryString = String.fromCharCode(...uint8Array);
    return Base64.btoa(binaryString);
};

// Compress Base64 string
export const compressBase64 = (base64String) => {
    try {
        // Convert Base64 to Uint8Array
        const binaryArray = base64ToUint8Array(base64String);
        
        // Compress the Uint8Array using pako
        const compressedArray = pako.deflate(binaryArray);
        
        // Convert the compressed Uint8Array back to Base64
        return uint8ArrayToBase64(compressedArray);
    } catch (error) {
        console.error('Compression error:', error);
        return null; // Return null or handle the error as needed
    }
};

// Decompress Base64 string
export const decompressBase64 = (compressedBase64String) => {
    try {
        // Convert Base64 to Uint8Array
        const compressedArray = base64ToUint8Array(compressedBase64String);
        
        // Decompress the Uint8Array using pako
        const decompressedArray = pako.inflate(compressedArray);
        
        // Convert the decompressed Uint8Array back to Base64
        return uint8ArrayToBase64(decompressedArray);
    } catch (error) {
        console.error('Decompression error:', error);
        return null; // Return null or handle the error as needed
    }
};
// Chunk size in bytes (e.g., 1 MB chunks)
const CHUNK_SIZE = 1024 * 1024;

// Function to compress a Base64 string in chunks
export const compressBase64InChunks = (base64String) => {
    try {
        const binaryArray = base64ToUint8Array(base64String);
        const compressedChunks = [];

        for (let i = 0; i < binaryArray.length; i += CHUNK_SIZE) {
            const chunk = binaryArray.slice(i, i + CHUNK_SIZE);
            const compressedChunk = pako.deflate(chunk);
            compressedChunks.push(compressedChunk);
        }

        // Concatenate all compressed chunks
        const compressedArray = Uint8Array.from(compressedChunks.flat());
        return uint8ArrayToBase64(compressedArray);
    } catch (error) {
        console.error('Chunked compression error:', error);
        return null;
    }
};
