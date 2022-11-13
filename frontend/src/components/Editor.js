import React from 'react';
import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';

const Editor = () => {
  return (
    
    <ImageEditor
    className="w-100"
    includeUI={{
      loadImage: {
        path: 'img/sampleImage.jpg',
        name: 'SampleImage',
      },
      // theme: myTheme,
      menu: ['shape', 'filter'],
      initMenu: 'filter',
      uiSize: {
        width: '100%',
        height: '90vh',
      },
      menuBarPosition: 'bottom',
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
  )
}

export default Editor