import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Version } from 'hooks/useToggledVersion'
import { useActiveWeb3React } from '../../hooks'
import { addPopup, PopupContent, removePopup, toggleWalletModal, toggleSettingsMenu, toggleMenu as _toggleMenu, setVersion as _setVersion } from './actions'
import { AppState, AppDispatch } from '../index'

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()

  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

export function useMenuToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const menuToggled = useSelector<
    AppState,
    AppState['application']['menuToggled']
  >((state) => state.application.menuToggled);

  const toggleMenu = (open: boolean) =>
    dispatch(_toggleMenu(open));

  return { menuToggled, toggleMenu };
}

export function useSetVersion() {
  const dispatch = useDispatch<AppDispatch>();
  const versionSet = useSelector<
    AppState,
    AppState['application']['versionSet']
  >((state) => state.application.versionSet);

  const setVersion = (version: Version) =>
    dispatch(_setVersion(version));

  return { versionSet, setVersion };
}


export function useWalletModalOpen(): boolean {
  return useSelector((state: AppState) => state.application.walletModalOpen)
}

export function useWalletModalToggle(): () => void {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(toggleWalletModal()), [dispatch])
}

export function useSettingsMenuOpen(): boolean {
  return useSelector((state: AppState) => state.application.settingsMenuOpen)
}

export function useToggleSettingsMenu(): () => void {
  const dispatch = useDispatch()
  return useCallback(() => dispatch(toggleSettingsMenu()), [dispatch])
}

// returns a function that allows adding a popup
export function useAddPopup(): (content: PopupContent, key?: string) => void {
  const dispatch = useDispatch()

  return useCallback(
    (content: PopupContent, key?: string) => {
      dispatch(addPopup({ content, key }))
    },
    [dispatch]
  )
}

// returns a function that allows removing a popup via its key
export function useRemovePopup(): (key: string) => void {
  const dispatch = useDispatch()
  return useCallback(
    (key: string) => {
      dispatch(removePopup({ key }))
    },
    [dispatch]
  )
}

// get the list of active popups
export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter(item => item.show), [list])
}
