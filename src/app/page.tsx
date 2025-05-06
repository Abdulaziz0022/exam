import Cards from '@/components/cards'
import Experience from '@/components/experince'
import Projects from '@/components/projects'
import Services from '@/components/services'

export default function Home() {
  return (
   <div > 
        <Experience />
        <Cards />
        <Projects />
        <Services />
   </div>
  );
}
