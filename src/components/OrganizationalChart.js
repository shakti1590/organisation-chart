// src/components/OrganizationalChart.js
import React from 'react';
import Tree from 'react-d3-tree';
import './OrganizationalChart.css';

const OrganizationalChart = ({ data }) => {
  const buildTreeData = (users, manager) => {
    return users
      .filter(user => user.Manager === manager)
      .map(user => ({
        name: user['Full Name'],
        attributes: {
          designation: user.Designation,
          email: user['Email Address'],
        },
        children: buildTreeData(users, user['Full Name']),
      }));
  };

  const treeData = buildTreeData(data, null);

  return (
    <div id="treeWrapper">
      <Tree
        data={treeData}
        orientation="vertical"
        translate={{ x: 400, y: 50 }} // Adjust the y value for vertical spacing
        nodeSize={{ x: 160, y: 120 }} // Adjust node size for better spacing
        separation={{ siblings: 1, nonSiblings: 3.0 }} // Adjust separation values
        styles={{
          nodes: {
            node: {
              circle: {
                fill: '#68a8e1',
                stroke: '#3e5a77',
                strokeWidth: 2,
              },
              name: {
                fontSize: 14, 
                fill: '#fff',
              },
              attributes: {
                fontSize: 12,
                fill: '#888',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default OrganizationalChart;
