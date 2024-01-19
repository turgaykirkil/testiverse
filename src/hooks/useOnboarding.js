import {useState, useEffect} from 'react';
import {getItem, setItem, removeItem} from '../Utils/AsyncStorage';

const useOnboarding = () => {
  console.log(getItem('onboarded'));
  const [showOnboarding, setShowOnboarding] = useState(null); // Başlangıç durumunu null olarak ayarla

  useEffect(() => {
    const checkIfAlreadyOnBoarding = async () => {
      let onboarded = await getItem('onboarded');
      console.log('Onboarded value:', onboarded);
      setShowOnboarding(onboarded !== '0'); // Eğer onboarded '0' değilse, showOnboarding'i true yap
    };

    checkIfAlreadyOnBoarding();
  }, []);

  const completeOnboarding = async () => {
    await setItem('onboarded', '0');
    setShowOnboarding(false);
  };

  const resetOnboarding = async () => {
    await removeItem('onboarded');
    setShowOnboarding(true);
  };

  return {showOnboarding, completeOnboarding, resetOnboarding};
};

export default useOnboarding;
