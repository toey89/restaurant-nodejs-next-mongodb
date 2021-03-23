import Fetch from "isomorphic-fetch";
import { auth } from 'strapi-helper-plugin';

/*class MyUploadAdapter {
    constructor( loader ) {
        // The file loader instance to use during the upload.
        this.loader = loader;
        
    }

    // Starts the upload process.
    upload() {
        return this.loader.file
            .then( file => new Promise( ( resolve, reject ) => {

                const toBase64 = file => new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = error => reject(error);
                });
                
                return toBase64(file).then(cFile=>{
                    return  Fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
                        method: "POST",
                        multipart: true,
                        "files.image": {
                            file: "http://localhost:1337/uploads/",
                            content_type: "image/jpeg"
                          },
                        imageBinary: cFile
                    }).then((d) => {
                        if (d.status) {
                            this.loader.uploaded = true;
                            resolve( {
                                //default: d.response.url
                                //default: `http://localhost:1337/uploads/${ file.name }`
                            } );
                        } else {
                            reject(`Couldn't upload file: ${ file.name }.`)
                        }
                    });
                })
                
            } ) );
    }

   
}

// ...

export default function MyCustomUploadAdapterPlugin( editor ) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
        // Configure the URL to the upload script in your back-end here!
        return new MyUploadAdapter( loader );
    };
}*/

export default function MyCustomUploadAdapterPlugin(editor) {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
      return new MyUploadAdapter(loader)
    }
}
  
  class MyUploadAdapter {
      constructor(loader) {
          // CKEditor 5's FileLoader instance.
        this.loader = loader;
        // URL where to send files.
        this.url = `http://localhost:1337/upload`;
      }
  
      // Starts the upload process.
      upload() {
          return new Promise((resolve, reject) => {
              this._initRequest();
              this._initListeners(resolve, reject);
              this._sendRequest();
          } );
      }
  
      // Aborts the upload process.
      abort() {
          if ( this.xhr ) {
              this.xhr.abort();
          }
      }
  
      // Example implementation using XMLHttpRequest.
      _initRequest() {
          const xhr = this.xhr = new XMLHttpRequest();
  
          xhr.open('POST', 'http://localhost:1337/upload', true);
          xhr.responseType = 'json';
          xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
          //xhr.setRequestHeader('Authorization', getToken())
      }
  
      // Initializes XMLHttpRequest listeners.
      _initListeners( resolve, reject ) {
          const xhr = this.xhr;
          const loader = this.loader;
          const genericErrorText = 'Couldn\'t upload file:' + ` ${ loader.file.name }.`;
  
          xhr.addEventListener( 'error', () => reject( genericErrorText ) );
          xhr.addEventListener( 'abort', () => reject() );
          xhr.addEventListener( 'load', () => {
              const response = xhr.response;
              if ( !response || response.error ) {
                  return reject( response && response.error ? response.error.message : genericErrorText );
                  
              }
  
              // If the upload is successful, resolve the upload promise with an object containing
              // at least the "default" URL, pointing to the image on the server.
              resolve({
                  default: response.s3Url
              });
          } );
  
          if ( xhr.upload ) {
              xhr.upload.addEventListener( 'progress', evt => {
                  if ( evt.lengthComputable ) {
                      loader.uploadTotal = evt.total;
                      loader.uploaded = evt.loaded;
                  }
              } );
          }
      }
  
      // Prepares the data and sends the request.
      _sendRequest() {
          const data = new FormData();
  
          this.loader.file.then(result => {
            data.append('file', result);
            this.xhr.send(data);
            }
          )
      }
  
  }
  