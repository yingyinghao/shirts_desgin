import React from 'react'
import CustomButton from './CustomButton'


const FilePicker = () => {
  return (
    <div className="filepicker-container">
      <div className='flex-1 flex flex-col'
      <input
      id="file-upload"
      type="file"
      accept="image/*"
      onChange={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor='file-upload' className='filepicker-label'>
        Upload Files
      </label>

    <p className='>
    {file === "" ? "No file selected" : file.name}
    </p>
      </div>
      </div>
    )
}

export default FilePicker