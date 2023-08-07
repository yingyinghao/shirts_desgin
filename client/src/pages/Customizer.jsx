import React, {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'

import config from  '../config/config'
import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage, reader} from '../config/helpers'
import {EditorTab, FilterTabs, DecalTypes} from '../config/constants'
import {fadeAnimation, alideAnimation} from '../config/motion'





const Customizer = () => {
  return (
    <div>Customizer</div>
  )
}

export default Customizer