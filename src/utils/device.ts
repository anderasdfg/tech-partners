/**
 * Device detection utilities
 */

/**
 * Detects the type of device based on user agent
 * @returns Device type: 'tablet', 'mobile', or 'desktop'
 */
export const getDeviceType = (): string => {
  const userAgent =
    typeof window !== 'undefined' ? window.navigator.userAgent : '';
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  const isTablet =
    /iPad|Android(?=.*\bMobile\b)(?=.*\bSafari\b)|Android(?=.*\bTablet\b)/i.test(
      userAgent
    );

  if (isTablet) return 'tablet';
  if (isMobile) return 'mobile';
  return 'desktop';
};
