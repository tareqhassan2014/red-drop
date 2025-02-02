# RedHope Blood Donation App Requirements

## 1. Introduction

### 1.1 Purpose

RedHope is a mobile application that connects blood donors and recipients using real-time, location-based matching. The platform streamlines donor-recipient communication by providing a convenient, secure, and user-friendly interface.

### 1.2 Scope

-   **Platform:** Android devices (React Native)
-   **User Types:**
    -   Unified Donor/Recipient (can toggle between roles)
    -   Data Entry Personnel (manage donor data)
    -   Admin (full system control)

### 1.3 Primary Goals

-   **Fast Matching:** Quick connection between recipients and compatible donors
-   **Location-Based:** Display relevant donors/hospitals within chosen radius
-   **Streamlined Process:** Single interface for managing blood requests
-   **Comprehensive Management:** Maintain up-to-date donor data

## 2. Project Overview

### 2.1 Problem Statement

-   Recipients struggle to find compatible donors in urgent situations
-   Donors lack visibility into urgent requests and nearby donation sites
-   Current methods (phone calls, social media) are inefficient

### 2.2 Solution Features

-   **Real-time Matching:** Broadcast urgent requests to compatible donors
-   **User-Friendly Interface:** Unified app for all user types
-   **Donation Tracking:** Complete logs of donations and requests
-   **Medical Integration:** Hospital and blood bank connectivity

### 2.3 Value Proposition

-   Location-aware donor matching
-   Smart ABO + Rh factor compatibility
-   Instant push notifications

## 3. User Roles

### 3.1 Unified Donor/Recipient

-   Self-registration and login
-   Toggle between donor/recipient modes
-   Create/respond to blood requests
-   Track donation history

### 3.2 Data Entry Personnel

-   Admin-created accounts
-   Manage donor database:
    -   Add new donors
    -   Update donor information
    -   Deactivate records
    -   Search and filter functionality
-   Action logging and auditing

### 3.3 Admin

-   Complete system control
-   User role management
-   Analytics and reporting
-   System configuration

## 4. Core Features

### 4.1 Navigation Structure

#### Main Flow

1. Splash Screen
2. Onboarding Screen
3. Home Screen

#### Home Screen Layout

##### Header Section

-   User profile picture and name (e.g., "Hasibur Rahman")
-   Location info (e.g., "Mirpur 10 Dhaka")
-   Notification bell icon
-   Achievement badges (e.g., "Lifesaver - 15 People")
-   Next donation date (e.g., "19.12.2024 - 54 Days Left")
-   Blood type indicator (e.g., "A+")

##### Blood Donation Campaign Carousel

-   Annual Blood Drive 2024
-   City Hall Blood Donation
-   National Blood Donation Week
-   Carousel indicator dots

##### Main Menu Grid

-   **Donate Blood** - Blood donation icon
-   **Request Blood** - Request form icon
-   **Blood Bank** - Hospital building icon
-   **Hospital** - Hospital facility icon
-   **Inbox** - Message envelope icon
-   **Emergency Numbers** - Emergency contact icon

##### Bottom Navigation

-   **Donor** - Drop icon
-   **Events** - Calendar icon
-   **Home** - House icon (primary)
-   **Donate** - Hand icon
-   **Profile** - Person icon

### 4.2 User Onboarding

#### Splash Screen

-   RedHope logo in blood drop shape
-   White background with red logo
-   Clean, minimal design

#### Onboarding Screens

1. **Collection Screen**

    - Illustration of person with blood donation
    - Text: "Collection of Blood from Registered Donor"
    - Progress indicator dots

2. **Donation Centers Screen**

    - Illustration of people around donation center
    - Text: "Nearby Donation Campaign/Centers"
    - Progress indicator dots

3. **Request Screen**
    - Heart-shaped illustration with people
    - Text: "Request Blood - Specify Your Needs"
    - "Get Started" button
    - Progress indicator dots

#### Design Elements

-   Consistent branding with red color scheme
-   Modern, friendly illustrations
-   Clear navigation with progress indicators
-   Simple, focused messaging
-   iOS-style time display (9:41)

#### Authentication Screens

##### Login Screen

-   **Header**

    -   Simple "Login" title
    -   iOS-style time display (9:41)

-   **Input Fields**

    1. Email

        - Label: "E-mail"
        - Placeholder: "Enter your email"
        - Full-width input

    2. Password
        - Label: "Password"
        - Placeholder: "Enter your password"
        - Password visibility toggle icon
        - Full-width input

-   **Additional Elements**
    -   "Forgot Password?" link in blue
    -   "Log In" button (dark red background)
    -   "or login with" text divider
    -   Google login button with icon

##### Create Account Screen

-   **Header**

    -   Title: "Create Account"
    -   iOS-style time display (9:41)

-   **Input Fields**

    1. Full Name

        - Placeholder: "Enter your name"
        - Full-width input

    2. Email

        - Label: "E-mail"
        - Placeholder: "Enter your email"
        - Full-width input

    3. Password

        - Label: "Password"
        - Placeholder: "Enter your password"
        - Password visibility toggle icon

    4. Confirm Password
        - Label: "Confirm Password"
        - Placeholder: "Enter your password"
        - Password visibility toggle icon

-   **Action Elements**
    -   "Log In" button (dark red background)
    -   "or login with" text divider
    -   Google login button with icon

### 4.3 Profile Management

#### Profile Screen

-   **Header**

    -   Back button with "Profile" title
    -   iOS-style time display (9:41)
    -   Red background banner

-   **Profile Information**

    -   Large circular profile picture
    -   User name: "Hasibur Rahman"
    -   Location: "Mirpur 10, Dhaka"
    -   Blood type indicator icon
    -   Edit profile button (in alternate version)

-   **Menu Options**

    1. **Inventories Section**

        - Account Information (with person icon)
        - Support (with headphone icon)

    2. **Historical Section**
        - Bookmarks (with bookmark icon)
        - Recent Activities (with clock icon)

-   **Action Items**

    -   Logout (with exit icon, in red)

-   **Bottom Navigation**
    -   Donor (drop icon)
    -   Events (calendar icon)
    -   Home (house icon, primary)
    -   Donate (hand icon)
    -   Profile (person icon, active)

#### Profile Variants

-   **Version 1 (Dark Header)**

    -   Red banner background
    -   White text
    -   Edit icon on profile picture

-   **Version 2 (Light Header)**
    -   White background
    -   Edit profile button
    -   Blood type indicator

### 4.4 Donor Features

-   Blood type registration
-   Availability toggle
-   Donation history
-   Eligibility tracking

#### Donor List Screen

-   **Header**

    -   Back button with "Donor" title
    -   Notification bell
    -   Options menu
    -   iOS-style time display (9:41)

-   **Donor Cards**

    -   Individual donor entries containing:

        1. **Profile Information**
            - Profile picture
            - Full name
            - Location with pin icon
            - Phone number with phone icon
            - Blood type indicator
            - Message icon for quick contact

    -   **Example Entries:**

        1. Mahbubur Rahman

            - Location: Eskaton Garden Road, Dhaka
            - Phone: +8801799998888
            - Blood type indicator
            - Message option

        2. Shikder Hossain (Multiple entries)
            - Location: Shantinagar, Dhaka
            - Phone: +8801799998888
            - Blood type indicator
            - Message option

-   **Bottom Navigation**
    -   Donor (active)
    -   Events
    -   Home
    -   Donate
    -   Profile

#### Donation Form Fields

-   **Header**

    -   Back button with "Donate Blood" title
    -   Notification bell and options menu
    -   iOS-style time display (9:41)

-   **Required Information**

    1. Full Name

        - Text input field
        - Placeholder: "Your name here"

    2. Blood Type

        - Dropdown selection
        - Placeholder: "Select Your Blood Type"

    3. Health Status

        - Text input field
        - Placeholder: "Recent surgery, allergy, vaccine or taking medicine"

    4. Last Donation Date

        - Date picker
        - Placeholder: "Select Date"

    5. Availability

        - Text input field
        - Placeholder: "e.g., Dhaka city, till January 2025"

    6. Personal Details
        - Weight (Dropdown - "Select Your Weight")
        - Age (Dropdown - "Select Your Age")

-   **Consent Section**

    -   Checkbox with consent text
    -   Text: "I voluntarily consent to donate blood and agree to any necessary medical checks before donation."

-   **Action Button**
    -   "Proceed to Donate" button
    -   Red background color
    -   Full-width design

### 4.5 Recipient Features

#### Blood Request Form

-   **Header**

    -   Back button with "Request Blood" title
    -   User profile icon
    -   Notification bell
    -   iOS-style time display (9:41)

-   **Blood Group Selection**

    -   Grid layout with 8 options:
        -   A+, A-
        -   B+, B-
        -   AB+, AB-
        -   O+, O-
    -   Active state shown in dark red
    -   Inactive state with red outline

-   **Required Information**

    1. Amount Selection

        - Dropdown field
        - Placeholder: "Quantity"
        - Arrow indicator for dropdown

    2. Location

        - Text input with location icon
        - Placeholder: "Select Location"
        - Target/crosshair icon for current location

    3. Contact Information

        - Mobile/Telephone input field
        - Edit icon
        - Input validation

    4. Patient Information
        - Disease/Cause input field
        - Edit icon
        - Medical details

-   **Action Buttons**
    -   Primary: "Request Now" (Dark red background)
    -   Secondary: "Save for later" (Outlined style)

### 4.6 Data Entry Dashboard

-   Donor record management
-   Search and filtering
-   Data export options
-   Activity logging

### 4.7 Privacy & Legal

#### Privacy Policy Screen

-   **Header**

    -   Back button with "Privacy Policy" title
    -   Notification bell and options menu
    -   iOS-style time display (9:41)

-   **Policy Content**

    1. **Information We Collect**

        - Personal Details: Name, contact info, date of birth, and address
        - Health Data: Blood type, medical conditions, donation history
        - Location: For finding nearby donation centers (with consent)
        - Usage Info: App interactions, device info, and IP address

    2. **How We Use Your Information**

        - Connect Donors & Recipients: Facilitate blood donations
        - Improve the App: Enhance user experience
        - Notifications: Reminders and important updates
        - Security: Protect against misuse

    3. **Sharing Your Information**

        - Healthcare Providers & Donation Centers
        - Law Enforcement: If legally required
        - Third-Party Services: For app functionality (e.g., storage)

    4. **Data Security**

        - Encryption and security measures implementation
        - Acknowledgment of security limitations

    5. **Your Rights**

        - Access, update, or delete personal info at any time

    6. **Contact Us**
        - Email: redhope@gmail.com

#### Success States

-   **Donation Form Success**
    -   Checkmark icon in red
    -   Success message: "Thank you! Your form has been successfully submitted. We're reviewing your information and will contact you soon with the next steps."
    -   Blood donation illustration
    -   Bottom navigation remains visible
    -   Consistent header with notification bell

### 4.8 Location Features

#### Nearby Donation Centers Screen

-   **Header**

    -   Back button with "Nearby Donation Centers" title
    -   User profile icon
    -   Notification bell
    -   Filter/sort options icon

-   **Search**

    -   Search bar with magnifying glass icon
    -   Placeholder: "Search"

-   **Center List**

    -   Center entries with:

        1. Holy Family Red Crescent

            - Location: Eskatan Garden Road, Dhaka
            - Rating: 5.0
            - Center logo/icon

        2. BRCBB

            - Location: Mogbazar, Dhaka
            - Rating: 5.0
            - Center logo/icon

        3. Quantum Blood Bank

            - Location: Shantinagar, Dhaka
            - Rating: 5.0
            - Center logo/icon

        4. Shandhani, DMC

            - Location: Dhaka
            - Rating: 5.0
            - Center logo/icon

        5. Police Blood Bank

            - Location: Rajarbag, Dhaka
            - Rating: 5.0
            - Center logo/icon

        6. Bangladesh Blood Bank
            - Location display

### 4.9 Notification System

#### In-App Notifications Screen

-   **Header**

    -   Back button with "Notification" title
    -   User profile icon
    -   Notification bell
    -   iOS-style time display (9:41)

-   **Today Section**

    -   Time-based organization
    -   Notification entries with:
        -   Marry Rose Blood bank updates
        -   Annual Blood Drive announcements
        -   Blood request notifications
        -   Options menu for each notification

-   **Other Section**
    -   Historical notifications
    -   Dated entries (e.g., 11/09/24, 08/07/24)
    -   Blood camp announcements
    -   BDRCS notifications

#### Lock Screen Notifications

-   **System Integration**

    -   Carrier name display (e.g., "Robi")
    -   Time display (9:41)
    -   Date display (Monday, Oct 5)

-   **Notification Types**

    1. System Updates

        - App Store updates
        - Version information
        - Time indicators (e.g., "15m ago")

    2. Blood Requests
        - User notifications (e.g., "Rakibul Hassan send Blood Request")
        - Action buttons (e.g., "Donate Now")
        - Time stamps (e.g., "20m ago")

### 4.10 Events Management

#### Donation Events Screen

-   **Header**

    -   Back button with "Donation Events" title
    -   Notification bell
    -   iOS-style time display (9:41)

-   **Search Section**

    -   Search bar with magnifying glass icon
    -   Placeholder: "Search events..."
    -   Calendar icon for date filtering

-   **Find Nearby Events**

    -   Location-based card
    -   Text: "Locate Nearby Blood Donation"
    -   Forward arrow indicator

-   **Event Categories**

    1. **Upcoming Events**

        - Annual Blood Drive 2024
            - Date: 10th October - 15th October
            - Time: 10 AM - 6 PM
        - City Hall Blood Donation
            - Date: 20th October

    2. **Featured Events**
        - National Blood Donation
        - Blood Drive cards

### 4.11 Communication

#### Chat Interface

-   **Header**

    -   Back button
    -   User name: "Emily McGuiness"
    -   Status: "Active Now"
    -   Call button
    -   iOS-style time display (9:41)

-   **Chat Features**
    -   Message timestamps (10:23, 10:24, 10:25)
    -   Location sharing with map view
    -   "View Map" action button
    -   Quick response buttons ("I'm on my way")
    -   Message input field with:
        -   Attachment icon
        -   "Aa" placeholder
        -   Send button

### 4.12 Help & Support

#### Help Center Screen

-   **Header**

    -   Back button with "Help & Support" title
    -   Search icon
    -   Profile icon
    -   iOS-style time display (9:41)

-   **Frequently Asked Questions**

    -   Section header with "View All" link
    -   FAQ Cards:
        1. "Am I eligible to donate blood?"
        2. "How do I register for a blood donation event?"
        3. "How to track previous donations?"

-   **Contact Options**

    -   Section header: "Need more help?"
    -   Subtext: "Contact us directly for assistance."
    -   Contact methods:
        1. Contact Live Chat
        2. Send us an E-mail
        3. Call us at +123-456-7890

-   **Additional Help**
    -   Troubleshooting Guide with icon

### 4.13 Donation History & Status

#### History Screen

-   **Header**

    -   Back button with "History" title
    -   User profile icon
    -   Notification bell
    -   iOS-style time display (9:41)

-   **Donation Status Indicator**

    1. **Available State**
        - Circular progress indicator in red
        - "Available to donate blood" message
        - Smiling emoji icon
        - "Donate Now" button
    2. **Unavailable State**
        - Circular progress indicator (90/120 days)
        - "Not available to donate blood" message
        - Sad emoji icon
        - "-30 Days" remaining indicator
        - "\*Keep a distance of 120 days" reminder

-   **Donation History List**

    -   Filter dropdown (All)
    -   History entries with:

        1. Healthcare Hospital

            - Location: 54 west Uttara Dhaka
            - Date: 11/10/2024
            - Facility image

        2. BRCBB

            - Location: Mogbazar, Dhaka
            - Date: 11/06/2024
            - Facility image

        3. Quantum Blood Bank

            - Location: Shantinagar, Dhaka
            - Date: 11/02/2024
            - Facility image

        4. Police Blood Bank
            - Location: Rajarbag, Dhaka
            - Date: 11/12/2023
            - Facility image

-   **Bottom Navigation**
    -   Standard navigation bar with:
        -   Donor
        -   Events
        -   Home (active)
        -   Donate
        -   Profile

## 5. Technical Requirements

### 5.1 Technology Stack

-   **Frontend:**

    -   React Native with TypeScript
    -   Expo SDK
    -   Expo Router for navigation
    -   React Native Paper for UI components

-   **Backend & Database:**

    -   Supabase
        -   PostgreSQL database
        -   Authentication
        -   Real-time subscriptions
        -   Storage

-   **AI Integration:**

    -   DeepSeek for intelligent processing
        -   Blood type matching
        -   Location-based recommendations
        -   Donor-recipient compatibility

-   **Development Tools:**

    -   TypeScript for type safety
    -   ESLint/Prettier for code formatting
    -   Jest for testing
    -   Expo Development Client

-   **Additional Libraries:**
    -   React Native Maps for location services
    -   Expo Notifications for push notifications
    -   React Native Paper for theming
    -   AsyncStorage for local data

### 5.2 Non-Functional Requirements

-   **Performance:**
    -   2-second load time
    -   Optimized queries
-   **Security:**
    -   HTTPS endpoints
    -   Encrypted data storage
-   **Reliability:**
    -   99.9% uptime target
    -   Graceful error handling

## 6. Development Phases

### Phase 1: Foundation

-   Project setup
-   Authentication
-   Basic navigation

### Phase 2: Core Features

-   User profiles
-   Donation management
-   Request system

### Phase 3: Advanced Features

-   Location services
-   Blood type matching
-   Push notifications

### Phase 4: Data Management

-   Admin dashboard
-   Data entry interface
-   Audit logging

### Phase 5: Polish

-   UI refinement
-   Performance optimization
-   Security hardening

### Phase 6: Launch

-   Play Store deployment
-   Usage monitoring
-   Feedback collection

## 7. Future Enhancements

-   Multi-language support
-   Healthcare API integration
-   Gamification features
-   Extended donation types
-   Social sharing

## 8. Team Structure

-   Project Manager
-   UI/UX Designer
-   Mobile Developers
-   Backend Engineer
-   QA Engineer
-   Data Entry Staff

## Usage Guidelines

### For Designers

Reference UI/UX and Core Features sections for user flow design and edge cases.

### For Developers

Follow Technical Requirements and Development Phases for implementation.

### For Stakeholders

Track progress against Development Phases and ensure alignment with objectives.
