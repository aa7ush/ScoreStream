import requests
try:
    from curl_cffi import requests as curl_requests
    USE_CURL_CFFI = True
except ImportError:
    curl_requests = requests
    USE_CURL_CFFI = False

def test_fetch():
    url = "https://www.sofascore.com/api/v1/sport/football/scheduled-events/2026-04-23"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/json, text/plain, */*",
        "Referer": "https://www.sofascore.com/",
        "Origin": "https://www.sofascore.com",
        "Host": "www.sofascore.com"
    }
    
    print(f"Testing fetch to: {url}")
    print(f"Using curl_cffi: {USE_CURL_CFFI}")
    
    try:
        kwargs = {"headers": headers, "timeout": 15}
        if USE_CURL_CFFI:
            kwargs["impersonate"] = "chrome120"
        
        r = curl_requests.get(url, **kwargs)
        print(f"Status Code: {r.status_code}")
        print(f"Response Length: {len(r.text)}")
        if r.status_code == 200:
            try:
                data = r.json()
                print(f"Events found: {len(data.get('events', []))}")
                # print(f"Full Response: {r.text[:1000]}")
            except:
                print("Failed to parse JSON")
                print(f"Response: {r.text[:500]}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_fetch()
