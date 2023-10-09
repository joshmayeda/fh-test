'use client';

import { useState, useEffect } from 'react'
import EnemyTile from './EnemyTile'
import EnemyModal from './EnemyModal'
import { Button } from '@mui/material'


const EnemyPage:React.FC = () => {
  const [showEnemyModal, setShowEnemyModal] = useState(false);

  const enemyTiles = [
    <EnemyTile enemyNum={1} key={1} />, 
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
    <EnemyTile enemyNum={1} key={1} />,
  ];

  return (
    <div className="overflow-y-auto overflow-x-hidden">
      <main className="flex flex-col min-h-screen justify-between divide-y-1 mt-12">
        {enemyTiles}
        <Button className="bg-yellow-500 mt-2">Next Turn</Button>
        <EnemyModal 
          showEnemyModal={showEnemyModal} 
          setShowEnemyModal={setShowEnemyModal}
          enemyTiles={enemyTiles} 
        />
        <div>
          hi
        </div> 
      </main>
    </div>
  )
}

export default EnemyPage;
