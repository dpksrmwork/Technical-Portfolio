#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import sys

def validate_portfolio(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        print(f"✅ Site is accessible: {response.status_code}")
        print(f"📄 Title: {soup.title.string if soup.title else 'No title'}")
        
        # Check for key elements
        checks = [
            ("Hero section", soup.find(string=lambda text: text and "Deepak Sharma" in text)),
            ("Delta Airlines", soup.find(string=lambda text: text and "Delta Airlines" in text)),
            ("Experience section", soup.find(string=lambda text: text and "Experience" in text)),
            ("Projects section", soup.find(string=lambda text: text and "Projects" in text)),
            ("Contact section", soup.find(string=lambda text: text and "Contact" in text)),
        ]
        
        for name, element in checks:
            status = "✅" if element else "❌"
            print(f"{status} {name}: {'Found' if element else 'Not found'}")
        
        print(f"\n📊 Page size: {len(response.content)} bytes")
        print(f"🔗 Response headers: {dict(response.headers)}")
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error accessing site: {e}")
        return False
    except Exception as e:
        print(f"❌ Error parsing site: {e}")
        return False
    
    return True

if __name__ == "__main__":
    url = "https://technical-portfolio.pages.dev/"
    validate_portfolio(url)