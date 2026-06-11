import clsx from 'clsx';
import { Alert } from '@/components/Lesson_02/Alert/Alert';

type Lesson_02Props = {
  hidden?: boolean;
};

export default function Lesson_02({ hidden = false }: Lesson_02Props) {
  return (
    <div className={clsx('lesson-02', { hidden: hidden })}>
      <h1>Lesson 02</h1>

      <Alert level="info" elevated>
        <h2>Welcome to our store!</h2>
        <p>Check out our latest products and offers.</p>
      </Alert>

      <Alert level="warning" outlined>
        <h2>Limited Time Offer!</h2>
        <p>Get 20% off on all items until the end of the week.</p>
      </Alert>

      <Alert level="error">
        <h2>Out of Stock</h2>
        <p>Sorry, the item you are looking for is currently out of stock.</p>
      </Alert>

      <Alert level="success">
        <h2>Thank You for Your Purchase!</h2>
        <p>Your order has been successfully placed.</p>
      </Alert>
    </div>
  );
}
