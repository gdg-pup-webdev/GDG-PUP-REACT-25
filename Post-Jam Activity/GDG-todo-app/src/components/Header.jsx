import sparkyLogo from '../assets/Sparky.png'

function Header({ taskCount, currentDate }) {
  return (
    <div
      className="rounded-[10px] p-8 text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] mb-6"
      style={{
        background: 'linear-gradient(165deg, #fbbc04 5%, #202124 20%, #202124 80%, #34a853 100%)',
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[70px] h-[70px] bg-transparent rounded-[10px] flex items-center justify-center overflow-hidden flex-shrink-0">
            <img src={sparkyLogo} alt="Sparky Bot" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-1">
              {taskCount} {taskCount === 1 ? 'Task' : 'Tasks'}
            </h2>
            <p className="text-sm opacity-95 font-normal">{currentDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header