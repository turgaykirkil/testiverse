import {useState, useEffect} from 'react';
import {getItem} from '../Utils/AsyncStorage';

const useOnboarding = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    const checkIfAlreadyOnBoarding = async () => {
      let onboarded = await getItem('onboarded');
      if (onboarded === '0') {
        setShowOnboarding(false);
      }
    };

    checkIfAlreadyOnBoarding();
  }, []);

  return showOnboarding;
};

export default useOnboarding;
