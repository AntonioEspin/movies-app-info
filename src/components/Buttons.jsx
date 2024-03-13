import iconPlay from '../icons/icon-play.svg'
import iconPlus from '../icons/icon-plus.svg'

import '../styles/Buttons.css'

export function Buttons ({openModal}) {

  const isOpenModal = openModal && 'buttons-modal'

  return (
    <div className={`buttons ${isOpenModal}`}>
      <button>
        <img src={iconPlay} alt="icon-play" />
        <span>VER AHORA</span>
      </button>
      <button>
        <img src={iconPlus} alt="icon-plus" />
        <span>VER DESPUÉS</span>
      </button>
    </div>
  )
}