import '../styles/Sidebar.css';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='container-sidebar'>
      <CDBSidebar textColor="#696969" backgroundColor="#F5F5F5" className={'sidebar'} breakpoint={0} toggled={false} minWidth={''} maxWidth={''}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Menu
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/" className="activeClicked">
              <CDBSidebarMenuItem icon="users">Cadastro</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/listagem" className="activeClicked">
              <CDBSidebarMenuItem icon="table">Listagem</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;