'use client'

import { FC, useEffect, useState } from 'react';
import axios from 'axios';

interface Community {
  id: string;
  name: string;
}

const CommunitiesList: FC = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.get('/api/communities');
        setCommunities(response.data);
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">All Communities</h2>
      <ul>
        {communities.map((community) => (
          <li
            key={community.id}
            className="bg-gray-100 hover:bg-gray-200 p-3 my-2 rounded-md transition duration-300"
          >
            <a href={`/r/${community.name}`} className="text-blue-500">
              {community.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunitiesList;
