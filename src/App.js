// src/App.js
import React from 'react';
import OrganizationalChart from './components/OrganizationalChart';
import './App.css';

const jsonData = [
  // Your JSON data here
  {
    "Full Name": "Alice Anderson",
    "Designation": "Founder",
    "Email Address": "alice.anderson@example.com",
    "Manager": null
  },
  {
    "Full Name": "Bob Barker",
    "Designation": "Founder",
    "Email Address": "bob.barker@example.com",
    "Manager": null
  },
  {
    "Full Name": "Carol CEO",
    "Designation": "CEO",
    "Email Address": "carol.ceo@example.com",
    "Manager": "Alice Anderson"
  },
  {
    "Full Name": "David HR",
    "Designation": "CHRO",
    "Email Address": "david.hr@example.com",
    "Manager": "Alice Anderson"
  },
  {
    "Full Name": "Eric CFO",
    "Designation": "CFO",
    "Email Address": "eric.cfo@example.com",
    "Manager": "Alice Anderson"
  },
  {
    "Full Name": "Frank Sales Mgr",
    "Designation": "Sales Manager",
    "Email Address": "frank.sales@example.com",
    "Manager": "Carol CEO"
  },
  {
    "Full Name": "Grace Marketing Mgr",
    "Designation": "Marketing Manager",
    "Email Address": "grace.marketing@example.com",
    "Manager": "Carol CEO"
  },
  {
    "Full Name": "Henry Ops Mgr",
    "Designation": "Operations Manager",
    "Email Address": "henry.ops@example.com",
    "Manager": "Carol CEO"
  },
  {
    "Full Name": "Irene Tech Mgr",
    "Designation": "Technology Manager",
    "Email Address": "irene.tech@example.com",
    "Manager": "Carol CEO"
  },
  {
    "Full Name": "Jack Sales TL",
    "Designation": "Sales Team Leader",
    "Email Address": "jack.sales@example.com",
    "Manager": "Frank Sales Mgr"
  },
  {
    "Full Name": "Kelly Sales TL",
    "Designation": "Sales Team Leader",
    "Email Address": "kelly.sales@example.com",
    "Manager": "Frank Sales Mgr"
  },
  {
    "Full Name": "Leo Mktg TL",
    "Designation": "Marketing Team Leader",
    "Email Address": "leo.marketing@example.com",
    "Manager": "Grace Marketing Mgr"
  },
  {
    "Full Name": "Maria Mktg TL",
    "Designation": "Marketing Team Leader",
    "Email Address": "maria.marketing@example.com",
    "Manager": "Grace Marketing Mgr"
  },
  {
    "Full Name": "Nathan Ops TL",
    "Designation": "Operations Team Leader",
    "Email Address": "nathan.ops@example.com",
    "Manager": "Henry Ops Mgr"
  },
  {
    "Full Name": "Olivia Ops TL",
    "Designation": "Operations Team Leader",
    "Email Address": "olivia.ops@example.com",
    "Manager": "Henry Ops Mgr"
  },
  {
    "Full Name": "Paul Tech TL",
    "Designation": "Technology Team Leader",
    "Email Address": "paul.tech@example.com",
    "Manager": "Irene Tech Mgr"
  },
  {
    "Full Name": "Quinn Tech TL",
    "Designation": "Technology Team Leader",
    "Email Address": "quinn.tech@example.com",
    "Manager": "Irene Tech Mgr"
  },
  {
    "Full Name": "Rachel Sales Rep",
    "Designation": "Sales Representative",
    "Email Address": "rachel.sales@example.com",
    "Manager": "Jack Sales TL"
  },
  {
    "Full Name": "Sam Sales Rep",
    "Designation": "Sales Representative",
    "Email Address": "sam.sales@example.com",
    "Manager": "Jack Sales TL"
  },
  {
    "Full Name": "Tina Sales Rep",
    "Designation": "Sales Representative",
    "Email Address": "tina.sales@example.com",
    "Manager": "Kelly Sales TL"
  },{
    "Full Name": "Victor Sales Rep",
    "Designation": "Sales Representative",
    "Email Address": "victor.sales@example.com",
    "Manager": "Kelly Sales TL"
  },
  {
    "Full Name": "Wendy Mktg Rep",
    "Designation": "Marketer",
    "Email Address": "wendy.marketing@example.com",
    "Manager": "Leo Mktg TL"
  },
  {
    "Full Name": "Xavier Mktg Rep",
    "Designation": "Marketer",
    "Email Address": "xavier.marketing@example.com",
    "Manager": "Leo Mktg TL"
  },
  {
    "Full Name": "Yara Ops Staff",
    "Designation": "Operations Staff",
    "Email Address": "yara.ops@example.com",
    "Manager": "Nathan Ops TL"
  },
  {
    "Full Name": "Zach Ops Staff",
    "Designation": "Operations Staff",
    "Email Address": "zach.ops@example.com",
    "Manager": "Nathan Ops TL"
  },
  {
    "Full Name": "Alex Tech Staff",
    "Designation": "Technology Staff",
    "Email Address": "alex.tech@example.com",
    "Manager": "Paul Tech TL"
  },
  {
    "Full Name": "Bella Tech Staff",
    "Designation": "Technology Staff",
    "Email Address": "bella.tech@example.com",
    "Manager": "Paul Tech TL"
  },
  {
    "Full Name": "Chris Tech Staff",
    "Designation": "Technology Staff",
    "Email Address": "chris.tech@example.com",
    "Manager": "Quinn Tech TL"
  },{
    "Full Name": "Dana Tech Staff",
    "Designation": "Technology Staff",
    "Email Address": "dana.tech@example.com",
    "Manager": "Quinn Tech TL"
  },


];

function App() {
  return (
      <div className="chart-wrapper">
        <OrganizationalChart data={jsonData} />
      </div>
  );
}

export default App;
