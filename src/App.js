import logo from './logo.svg';
import './App.css';
import { Router, Route, Routes } from 'react-router-dom';
import LeadNew from './components/Main/LeadNew';
import LeadSource from './components/LeadSource'
import ReportNew from './components/Main/ReportNew';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LeadNew />} />
      <Route path="/reports" element={<ReportNew />} />
      <Route path="/lead-source" element={<LeadSource />} />

    </Routes>
  );
}

export default App;

