import React from 'react'
import { Modal, Button } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const ModalWrapper = styled.div`
  position: relative;
  & button.selected {
    background-color: #8b2a9b !important;
  }
  & button {
    outline: none;
  }
`

const ApplyButton = styled(Button)`
  position: absolute;
  right: 0;
  bottom: 16px;
`

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title="Settings" onDismiss={onDismiss}>
      <ModalWrapper>
        <SlippageToleranceSetting />
        <TransactionDeadlineSetting />
        <ApplyButton className='selected' onClick={onDismiss}>Apply</ApplyButton>
      </ModalWrapper>
    </Modal>
  )
}

export default SettingsModal
