import * as React from 'react';
import './styles.css';
import { Button } from './components/Button';

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-purple-100">
      <h1 className="font-mono text-2xl pb-8">
        git-bisect
      </h1>
      <div className="flex flex-row items-center">
        <Button
          onClick={() =>
            setCount((prevState) => prevState + 1)
          }
          label={'+'}
        />
        <p className="font-mono px-6 w-15"> {count}</p>
        <Button
          onClick={() =>
            setCount((prevState) => prevState + 1)
          }
          label={'-'}
        />
      </div>
      <div className="absolute bottom-0">
        Version 0.0.96
      </div>
    </div>
  );
}
