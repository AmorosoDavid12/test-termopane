import { useRouter } from 'next/router';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  const router = useRouter();

  // Check if the current route is '/'
  const isHomeRoute = router.pathname === '/';

  return (
    <>
      <MainNavigation Homeclass={isHomeRoute}/>
      <main className={`${isHomeRoute ? classes.main1 : classes.main2} ${isHomeRoute ? classes.backgroundImage : ''}`}
      style={isHomeRoute ? { backgroundImage: 'linear-gradient(45deg, #1e548a80 40%, rgba(43, 13, 194, 0) 100%, rgba(43, 13, 194, 0) 100%), url(/5214a1e42c3cd51cc9c83ffcbfee6e99.jpg)' } : {}}
      >
        {props.children}
      </main>
    </>
  );
}

export default Layout;