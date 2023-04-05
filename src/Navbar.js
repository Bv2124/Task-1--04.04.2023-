import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Box,Tab} from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (<div>
    <Box sx={{ width: '70%' }}>
      <Box sx={{ border: 3,borderRadius:'10px', borderColor: 'rgba(29,140,242,0.2)',borderShadow:'0px 10px 30px rgba(29,140,242,0.2)' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<img
              alt="board icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(0)} />
          <Tab label={<img
              alt="views icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/views_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(1)} />
          <Tab label={<img
              alt="dashboard icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/dashboard_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(2)} />
          <Tab label={<img
              alt="integrations icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/integrations_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(3)} />
          <Tab label={<img
              alt="automations icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/automations_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(4)} />
          <Tab label={<img
              alt="apps icon"
              className="main_img"
              src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/apps_icon.svg"
              style={{ width: 16 }}
            />} {...a11yProps(5)} />
          <Tab label={
          <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/docs_icon.svg"
             style={{ width: 16 }}
           />
          } {...a11yProps(6)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg"
             style={{ width: 40 }}
           /> <h1>Boards</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={1} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:5034FF/Generator_featured images/Home Page - 2022 Rebrand/tabs/views_icon.svg"
             style={{ width: 40 }}
           /> <h1>Views</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={2} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/dashboard_icon.svg"
             style={{ width: 40 }}
           /> <h1>Dashboards</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={3} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/integrations_icon.svg"
             style={{ width: 40 }}
           /> <h1>Integrations</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={4} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/automations_icon.svg"
             style={{ width: 40 }}
           /> <h1>Automations</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={5} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/apps_icon.svg"
             style={{ width: 40 }}
           /> <h1>Apps</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
      <TabPanel value={value} index={6} className='TabValue'>
        <img
             alt="docs icon"
             className="main_img"
             src="https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/docs_icon.svg"
             style={{ width: 40 }}
           /> <h1>Docs</h1>
           <p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
           <Button variant="text">Learn more &#8594;</Button>
      </TabPanel>
    </Box>
  </div>
  );
}