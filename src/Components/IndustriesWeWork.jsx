import { FaHospital, FaUniversity, FaStore, FaIndustry, FaGamepad, FaOilCan, FaPlane, FaRobot, FaUsers, FaCloud } from 'react-icons/fa';

function IndustriesWithIcons() {
  return (
    <>
        <div className="container-fluid grey-bg py-5">
      {/* First Row */}
      <div className="row d-flex justify-content-center py-5 px-5">
        {/* First column with icon and title */}
        <div className="col-10 text-center mb-4">
            <h1>
            Industries <span style={{color:'orange'}}>We Work In</span>
            </h1>
        </div>
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaPlane size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Tourism</p>
        </div>

        {/* Second column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaHospital size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Health Care</p>
        </div>

        {/* Third column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaUniversity size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Banking</p>
        </div>

        {/* Fourth column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaStore size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Retail</p>
        </div>

        {/* Fifth column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaIndustry size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Manufacturing</p>
        </div>
      

      {/* Second Row */}
        {/* First column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaGamepad size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Game Development</p>
        </div>

        {/* Second column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaOilCan size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Oil & Gas</p>
        </div>

        {/* Third column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaUsers size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Public Service</p>
        </div>

        {/* Fourth column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaCloud size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>SaaS</p>
        </div>

        {/* Fifth column with icon and title */}
        <div className='col-md-2 m-3 mb-sm-4 col-4 d-flex flex-column align-items-center'>
          <div className="white-bg shadow rounded-circle d-flex justify-content-center align-items-center" style={{ width: '70px', height: '70px' }}>
            <FaRobot size={40} style={{color:'orange'}} />
          </div>
          <p className="mt-2" style={{ fontWeight: 'bold', textAlign: 'center' }}>Robotics</p>
        </div>
        </div>
    </div>
    </>

    
  );
}

export default IndustriesWithIcons;
