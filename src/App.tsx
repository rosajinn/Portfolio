/**
 * Components
 */
import { Header } from '@/components/Header';

export const App = () => {
  return (
    <div className='min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-primary-container md:p-8 lg:p-12'>
      <div className='max-w-7xl ms-auto flex flex-col gap-2'>
        <Header />
      </div>
    </div>
  );
};

export default App;
