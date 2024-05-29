import { Outlet } from "react-router-dom";


const RootLayout = () => {
  return (
    <div>
      <div>
        <div >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default RootLayout