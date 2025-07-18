#!/usr/bin/env python3
"""
Backend API Testing Suite
Tests the FastAPI backend endpoints for connectivity and functionality
"""

import requests
import json
import sys
import os
from datetime import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL')
if not BACKEND_URL:
    print("❌ REACT_APP_BACKEND_URL not found in environment")
    sys.exit(1)

API_BASE_URL = f"{BACKEND_URL}/api"

def test_health_check():
    """Test basic API connectivity"""
    print("🔍 Testing API Health Check...")
    try:
        response = requests.get(f"{API_BASE_URL}/", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check passed")
                return True
            else:
                print(f"❌ Unexpected response: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check failed with error: {e}")
        return False

def test_create_status_check():
    """Test creating a status check"""
    print("🔍 Testing Create Status Check...")
    try:
        test_data = {
            "client_name": "F1RacingPortfolio"
        }
        response = requests.post(f"{API_BASE_URL}/status", 
                               json=test_data, 
                               timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("client_name") == "F1RacingPortfolio" and 
                "id" in data and 
                "timestamp" in data):
                print("✅ Create status check passed")
                return True, data["id"]
            else:
                print(f"❌ Invalid response structure: {data}")
                return False, None
        else:
            print(f"❌ Create status check failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False, None
    except requests.exceptions.RequestException as e:
        print(f"❌ Create status check failed with error: {e}")
        return False, None

def test_get_status_checks():
    """Test retrieving status checks"""
    print("🔍 Testing Get Status Checks...")
    try:
        response = requests.get(f"{API_BASE_URL}/status", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Get status checks passed - Found {len(data)} records")
                return True
            else:
                print(f"❌ Expected list, got: {type(data)}")
                return False
        else:
            print(f"❌ Get status checks failed with status {response.status_code}")
            print(f"Response: {response.text}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Get status checks failed with error: {e}")
        return False

def test_cors_headers():
    """Test CORS configuration"""
    print("🔍 Testing CORS Headers...")
    try:
        response = requests.options(f"{API_BASE_URL}/", timeout=10)
        headers = response.headers
        
        cors_headers = [
            'access-control-allow-origin',
            'access-control-allow-methods',
            'access-control-allow-headers'
        ]
        
        cors_ok = True
        for header in cors_headers:
            if header not in headers:
                print(f"❌ Missing CORS header: {header}")
                cors_ok = False
        
        if cors_ok:
            print("✅ CORS headers configured correctly")
            return True
        else:
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ CORS test failed with error: {e}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("=" * 60)
    print("🚀 BACKEND API TESTING SUITE")
    print("=" * 60)
    print(f"Testing API at: {API_BASE_URL}")
    print()
    
    test_results = []
    
    # Test 1: Health Check
    test_results.append(test_health_check())
    print()
    
    # Test 2: CORS Headers
    test_results.append(test_cors_headers())
    print()
    
    # Test 3: Create Status Check
    create_success, created_id = test_create_status_check()
    test_results.append(create_success)
    print()
    
    # Test 4: Get Status Checks
    test_results.append(test_get_status_checks())
    print()
    
    # Summary
    print("=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(test_results)
    total = len(test_results)
    
    print(f"Tests Passed: {passed}/{total}")
    
    if passed == total:
        print("🎉 ALL TESTS PASSED - Backend is working correctly!")
        return True
    else:
        print("❌ SOME TESTS FAILED - Backend has issues!")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)