// Using test driven development, write a component that displays 
// the local time from a timestamp service in a H1 tag.
// 
// The component should handle an error state if the service returns a error
// The component should display the service time in HH:MM:SS
// The component should render a loading state while waiting for data from the service

/**
 * GET: Returns the server time in the following format
 * { utc: {utcTimestamp}, iso: {isoTimestamp} }
 */
 const serviceUrl = 'https://rfwavrgo09.execute-api.us-east-1.amazonaws.com/dev/admin/timestamp';

const TimeDisplay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {        
        const response = await fetch(serviceUrl);
        const data = await response.json();
        setIsLoading(false);
      } catch (error) {
        setHasError(error);
        setIsLoading(false);
      }

    })()
  }, [input])

  if(isLoading) {
    return (
      <div test-id="loading">...loading</div>
    )
  }

  if(hasError) {
    return (
      <div test-id="error">something went wrong</div>
    )
  }

  return (
    <h1>{new Date(data.utcTimestamp).toLocaleDateString('us')}</h1>
  )
}
