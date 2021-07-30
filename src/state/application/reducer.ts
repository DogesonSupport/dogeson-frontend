import { createReducer, nanoid } from '@reduxjs/toolkit'
import { Version } from 'hooks/useToggledVersion'
import {
  addPopup,
  PopupContent,
  removePopup,
  toggleWalletModal,
  toggleSettingsMenu,
  updateBlockNumber,
  toggleMenu,
  setVersion,
  setSwapType
} from './actions'

type PopupList = Array<{ key: string; show: boolean; content: PopupContent; removeAfterMs: number | null }>

export interface ApplicationState {
  blockNumber: { [chainId: number]: number }
  popupList: PopupList
  walletModalOpen: boolean
  settingsMenuOpen: boolean
  menuToggled: boolean
  versionSet: Version
  swapType: string
}

const initialState: ApplicationState = {
  blockNumber: {},
  popupList: [],
  walletModalOpen: false,
  settingsMenuOpen: false,
  menuToggled: false,
  versionSet: Version.v2,
  swapType: 'swap'
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateBlockNumber, (state, action) => {
      const { chainId, blockNumber } = action.payload
      if (typeof state.blockNumber[chainId] !== 'number') {
        state.blockNumber[chainId] = blockNumber
      } else {
        state.blockNumber[chainId] = Math.max(blockNumber, state.blockNumber[chainId])
      }
    })
    .addCase(toggleWalletModal, state => {
      state.walletModalOpen = !state.walletModalOpen
    })
    .addCase(toggleSettingsMenu, state => {
      state.settingsMenuOpen = !state.settingsMenuOpen
    })
    .addCase(addPopup, (state, { payload: { content, key, removeAfterMs = 15000 } }) => {
      state.popupList = (key ? state.popupList.filter(popup => popup.key !== key) : state.popupList).concat([
        {
          key: key || nanoid(),
          show: true,
          content,
          removeAfterMs
        }
      ])
    })
    .addCase(removePopup, (state, { payload: { key } }) => {
      state.popupList.forEach(p => {
        if (p.key === key) {
          p.show = false
        }
      })
    })
    .addCase(toggleMenu, state => {
      state.menuToggled = !state.menuToggled
    })
    .addCase(setVersion, (state, { payload }) => {
      state.versionSet = payload
    })
    .addCase(setSwapType, (state, { payload }) => {
      state.swapType = payload
    })
)
