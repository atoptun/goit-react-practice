import useToggle from '../hooks/useToggle';

function ComponentA() {
  const { isOpen, open, close } = useToggle(false);

  return (
    <div>
      Toggle hook example
      <>
        <br />
        <button onClick={open}>Open modal</button>
        <br />
        <button onClick={close}>Close modal</button>
        <br />
        <p>Modal is {isOpen ? 'open' : 'closed'}</p>
      </>
    </div>
  );
}

export default ComponentA;
