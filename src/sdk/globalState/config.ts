import type { Dispatch } from 'react'

interface GlobalState {
  displayMenuSidebar: boolean
}

interface Action {
  type: 'OPEN_MENU_SIDEBAR' | 'CLOSE_MENU_SIDEBAR'
}

const initialState: GlobalState = {
  displayMenuSidebar: false,
}

const actions = {
  OPEN_MENU_SIDEBAR: (state: GlobalState) => ({
    ...state,
    displayMenuSidebar: true,
  }),
  CLOSE_MENU_SIDEBAR: (state: GlobalState) => ({
    ...state,
    displayMenuSidebar: false,
  }),
}

const effects = (dispatch: Dispatch<Action>) => ({
  openMenuSidebar: () => dispatch({ type: 'OPEN_MENU_SIDEBAR' }),
  closeMenuSidebar: () => dispatch({ type: 'CLOSE_MENU_SIDEBAR' }),
})

export default { actions, effects, initialState }
