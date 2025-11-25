import React from 'react'

export default function App()   {
  return (
    <div className="container">
    <h1>Deploy da Aplicação no Vercel</h1>
    <p>Este projeto foi deployado usando Github + Vercel automaticamente</p>

  <div className="card">
    <h3>Funcionamento:</h3>
    <ul>
      <li> Push no Github - Vercel builda automaticamente</li>
      <li>Preview Deploy para cada PR</li>
      <li>Deploy para produção na branch main</li>
    </ul>
  </div>
    </div>
  )
};