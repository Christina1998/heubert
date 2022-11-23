import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import LeadNew from './components/Main/LeadNew';
import LeadSourceMain from './components/Main/LeadSourceMain'
import ReportNew from './components/Main/ReportNew';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeadNew />} />
      <Route path="/reports" element={<ReportNew />} />
      <Route path="/lead-source" element={<LeadSourceMain />} />

    </Routes>
  );
}

export default App;

