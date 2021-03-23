
import React, { useState, useEffect, useRef, component } from 'react';
//import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
//import * as customEditor from './ckeditor2';
//import MyCustomUploadAdapterPlugin from './MyUploadAdapter';
import ClassicEditor from 'ckeditor-build-with-simple-upload-provider-strapi';


function Ckeditor(props) {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  //const { CKEditor, ClassicEditor } = editorRef.current || {}
  const { CKEditor, customEditor } = editorRef.current || {}
  //const Editor = customEditor;

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      //ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
      //customEditor: require('./ckeditor2'),
    }
    setEditorLoaded(true)
  }, [])

  return editorLoaded ? (
    <CKEditor
      config={{
        removePlugins: ['ImageCaption'],
        
        simpleUpload: {
          uploadUrl: `${process.env.NEXT_PUBLIC_API_URL}/upload`,
        },
        /*simpleUpload: {
          // The URL that the images are uploaded to.
          uploadUrl: "http://localhost:1337/uploads/",

          // Enable the XMLHttpRequest.withCredentials property.
          withCredentials: true,

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            "X-CSRF-TOKEN": "CSRF-Token",
            Authorization: "Bearer <JSON Web Token>",
          },
        },*/
        //extraPlugins: [MyCustomUploadAdapterPlugin],
        //plugins: [ UploadAdapter ],
        /*ckfinder: {
          // eslint-disable-next-line max-len
          uploadUrl: 'http://localhost:1337/uploads/'
        },*/
        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'insertTable',
            '|',
            'imageUpload',
            '|',
            'undo',
            'redo'
          ]
        },
        image: {
          toolbar: [
            'imageStyle:alignLeft', 'imageStyle:alignCenter', 'imageStyle:alignRight',
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative',
          ],
          styles: [
            'alignLeft', 'alignCenter', 'alignRight'
          ],

        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        },
        language: 'en'
      }}
      //ngModel={notification.body}
      editor={ClassicEditor}
      data={props.value}
      onReady={editor => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        console.log({ event, editor, data })
        props.onChange(data)
      }}
    />
  ) : (
      <div>Editor loading</div>
    )
}
export default Ckeditor;