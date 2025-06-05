'use client';
import React, { useState } from 'react';
import {
    Home,
    Users,
    CreditCard,
    Car,
    UserCheck,
    Smartphone,
    ArrowLeft,
    Plus,
    Eye,
    Edit,
    Trash2,
    Search,
    Filter,
    Calendar,
    Phone,
    Mail,
    Settings,
    Bell,
    User,
    ChevronRight,
    Building,
    Shield,
    Award,
    Clock,
    AlertTriangle,
    Camera,
    FileText,
} from 'lucide-react';

const JohnsHopkinsDigitalOffice = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Johns Hopkins Brand Colors
    const colors = {
        primary: '#009B8C', // Teal - matches the image background
        secondary: '#F2C413', // Gold - kept for contrast
        accent: '#00706A', // Darker teal for accents
        light: '#4DD0C7', // Lighter teal
        tertiary: '#003B7A', // Navy blue for text contrast
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            400: '#94A3B8',
            500: '#64748B',
            600: '#475569',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
        },
    };

    // Sample data
    const idCards = [
        {
            id: 1,
            employeeName: 'Hadi Al Fadl',
            badgeNumber: '005005IT1502/JHV',
            department: 'IT Services',
            position: 'System Administrator',
            issueDate: '2024-01-15',
            expiryDate: '2025-01-15',
            status: 'Active',
            cardType: 'Employee'
        },
        {
            id: 2,
            employeeName: 'Dr. Sarah Ahmad',
            badgeNumber: '006025MD1203/JHV',
            department: 'Cardiology',
            position: 'Senior Physician',
            issueDate: '2024-03-10',
            expiryDate: '2025-03-10',
            status: 'Active',
            cardType: 'Medical Staff'
        },
        {
            id: 3,
            employeeName: 'Ahmed Contractor',
            badgeNumber: 'TEMP0055/JHV',
            department: 'Maintenance',
            position: 'Contractor',
            issueDate: '2024-05-01',
            expiryDate: '2024-12-31',
            status: 'Temporary',
            cardType: 'Contractor'
        },
    ];

    const stickers = [
        {
            id: 1,
            type: 'COMMUNITY RWCAMP',
            model: 'BUS 2016',
            expiry: 'Permanent',
            plate: '6767 NTI J',
            status: 'Approved',
            owner: 'Hadi Al Fadl',
            requestDate: '2024-01-10'
        },
        {
            id: 2,
            type: 'COMMUNITY RWCAMP',
            model: 'KIA 2023',
            expiry: 'Permanent',
            plate: '6876603',
            status: 'Approved',
            owner: 'Dr. Sarah Ahmad',
            requestDate: '2024-02-15'
        },
        {
            id: 3,
            type: 'COMMUNITY RWCAMP',
            model: 'AUDI 2016',
            expiry: 'Permanent',
            plate: '24758486',
            status: 'Approved',
            owner: 'Mohammed Hassan',
            requestDate: '2024-03-20'
        },
        {
            id: 4,
            type: 'COMMUNITY RWCAMP',
            model: 'AMMONIA 2015',
            expiry: 'Permanent',
            plate: '1744',
            status: 'Rejected',
            owner: 'Ahmed Ali',
            requestDate: '2024-04-05'
        },
    ];

    const meetingRequests = [
        {
            id: 1802,
            companyName: 'TechCorp Solutions',
            contactPerson: 'Ahmed Al-Rashid',
            meetingDate: '06/05/2025',
            meetingTime: '09:00 - 10:00',
            room: 'Conference Room A',
            meetingType: 'IT Consultation',
            status: 'Pending Approval',
            description: 'Discussion about new hospital management system',
        },
        {
            id: 1844,
            companyName: 'MedEquip LLC',
            contactPerson: 'Sarah Johnson',
            meetingDate: '05/24/2025',
            meetingTime: '14:00 - 15:00',
            room: 'Medical Equipment Demo Room',
            meetingType: 'Equipment Demo',
            status: 'Approved',
            description: 'Demonstration of new MRI equipment',
        },
        {
            id: 1845,
            companyName: 'CleanPro Services',
            contactPerson: 'Mohammed Hassan',
            meetingDate: '05/24/2025',
            meetingTime: '11:00 - 12:00',
            room: 'Administration Office',
            meetingType: 'Service Review',
            status: 'Completed',
            description: 'Monthly cleaning service review meeting',
        },
    ];

    const securityViolations = [
        {
            id: 2001,
            reportedBy: 'Security Team Alpha',
            date: '06/04/2025',
            time: '14:30',
            location: 'Main Campus - Building A',
            type: 'Unauthorized Access',
            severity: 'High',
            status: 'Under Investigation',
            description: 'Attempted access to restricted area without proper authorization'
        },
        {
            id: 2002,
            reportedBy: 'Dr. Sarah Ahmad',
            date: '06/03/2025',
            time: '09:15',
            location: 'Research Wing - Lab 205',
            type: 'Badge Violation',
            severity: 'Medium',
            status: 'Resolved',
            description: 'Employee found without proper ID badge in secure area'
        },
        {
            id: 2003,
            reportedBy: 'Gate Security',
            date: '06/02/2025',
            time: '18:45',
            location: 'North Gate',
            type: 'Vehicle Violation',
            severity: 'Low',
            status: 'Pending Review',
            description: 'Vehicle without proper sticker attempting entry'
        },
    ];

    // Johns Hopkins Logo Component
    const JHLogo = ({ size = 32, className = '' }) => (
        <div
            className={`relative ${className}`}
            style={{ width: size, height: size }}
        >
            <div
                className="absolute inset-0 rounded-full flex items-center justify-center text-white font-bold"
                style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                    fontSize: size * 0.3,
                }}
            >
                <Shield className="w-3/4 h-3/4" />
            </div>
        </div>
    );

    const Sidebar = () => (
        <div
            className="w-72 min-h-full z-10 shadow-2xl relative overflow-auto"
            style={{
                background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
            }}
        >
            {/* Header */}
            <div className="p-4 border-b border-blue-700/30">
                <div className="flex items-center mb-6">
                    <JHLogo size={40} className="mr-4" />
                    <div>
                        <h1 className="text-white text-lg font-bold">Digital Office</h1>
                        <p className="text-blue-200 text-xs">Powered by Johns Hopkins</p>
                    </div>
                </div>

                {/* User Profile Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-3">
                            <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Hadi Fadl</h3>
                            <p className="text-blue-200 text-xs">Administrator</p>
                        </div>
                    </div>
                    <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                            <span className="text-blue-300">Badge No:</span>
                            <span className="text-white">005005IT1502/JHV</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-blue-300">Department:</span>
                            <span className="text-white">IT Services</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
                <div className="text-blue-300 text-xs uppercase tracking-wider mb-3 px-3">
                    Navigation
                </div>

                {[
                    { id: 'dashboard', icon: Home, label: 'Dashboard', badge: null },
                    { id: 'id-cards', icon: CreditCard, label: 'ID Card Management', badge: '3' },
                    { id: 'stickers', icon: Car, label: 'Vehicle Stickers', badge: '4' },
                    {
                        id: 'meetings',
                        icon: Calendar,
                        label: 'Meeting Management',
                        badge: '3',
                    },
                    {
                        id: 'security',
                        icon: AlertTriangle,
                        label: 'Security Violations',
                        badge: '2',
                    },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setCurrentView(item.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${currentView === item.id
                            ? 'bg-white/20 backdrop-blur-sm shadow-lg'
                            : 'hover:bg-white/10 hover:backdrop-blur-sm'
                            }`}
                    >
                        <div className="flex items-center">
                            <item.icon
                                className={`w-5 h-5 mr-3 ${currentView === item.id
                                    ? 'text-white'
                                    : 'text-blue-300 group-hover:text-white'
                                    }`}
                            />
                            <span
                                className={`text-sm font-medium ${currentView === item.id
                                    ? 'text-white'
                                    : 'text-blue-200 group-hover:text-white'
                                    }`}
                            >
                                {item.label}
                            </span>
                        </div>
                        <div className="flex items-center">
                            {item.badge && (
                                <span className="bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center mr-2">
                                    {item.badge}
                                </span>
                            )}
                            <ChevronRight
                                className={`w-4 h-4 transition-transform ${currentView === item.id
                                    ? 'text-white rotate-90'
                                    : 'text-blue-400 group-hover:text-white'
                                    }`}
                            />
                        </div>
                    </button>
                ))}
            </nav>

            {/* Organization Info */}
            <div className="mt-auto p-6 border-t border-blue-700/30">
                <div className="bg-white/5 rounded-xl p-4">
                    <div className="text-xs space-y-1">
                        <div className="text-blue-300">Position</div>
                        <div className="text-white">Internal Staffing Div</div>
                        <div className="text-blue-400">ID: 300033502</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 mt-8">
                <div className="flex space-x-2">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-2 transition-all">
                        <Settings className="w-4 h-4 text-white mx-auto" />
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-2 transition-all relative">
                        <Bell className="w-4 h-4 text-white mx-auto" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    </button>
                </div>
            </div>
        </div>
    );

    const Dashboard = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            {/* Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Welcome back, Hadi
                        </h1>
                        <p className="text-gray-600">
                            Here's what's happening with your digital office today.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                    Last updated: Just now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-7">
                {[
                    {
                        id: 'id-cards',
                        title: 'ID Card Management',
                        icon: CreditCard,
                        color: colors.primary,
                        description: 'Manage employee identification',
                    },
                    {
                        id: 'stickers',
                        title: 'Vehicle Stickers',
                        icon: Car,
                        color: colors.success,
                        description: 'Vehicle access permits',
                    },
                    {
                        id: 'security',
                        title: 'Security Violations',
                        icon: AlertTriangle,
                        color: colors.error,
                        description: 'Security incident management',
                    },
                    {
                        id: 'meetings',
                        title: 'Meeting Management',
                        icon: Calendar,
                        color: colors.accent,
                        description: 'Schedule and manage meetings',
                    },
                ].map((service) => (
                    <div
                        key={service.id}
                        onClick={() => setCurrentView(service.id)}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 group"
                    >
                        <div
                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${service.color}20` }}
                        >
                            <service.icon
                                className="w-8 h-8"
                                style={{ color: service.color }}
                            />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                            <span>Access →</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* Johns Hopkins Branding Section */}
            <div
                className="rounded-3xl p-8 mb-8 text-white relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.light} 100%)`,
                }}
            >
                <div className="relative z-10">
                    <div className="flex items-center mb-6">
                        <JHLogo size={64} className="mr-6" />
                        <div>
                            <h2 className="text-3xl font-bold mb-2">
                                Johns Hopkins Digital Office
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Streamlining Healthcare Administration
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                مركز جونز هوبكنز أرامكو الطبي
                            </h3>
                            <p className="text-blue-100 mb-4">
                                Leading healthcare excellence in the region
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <span className="text-sm">999 / 013-875-5000</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span className="text-sm">info@jhah.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <Award className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                                <h4 className="font-semibold mb-2">Excellence in Care</h4>
                                <p className="text-sm text-blue-100">
                                    Magnet Recognition Program
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                    <div className="w-full h-full rounded-full border-4 border-white"></div>
                </div>
            </div>
        </div>
    );

    const IDCardManagement = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentView('dashboard')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            ID Card Management
                        </h2>
                        <p className="text-gray-600">Manage employee identification cards</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Filter className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Search className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                    <button
                        onClick={() => setCurrentView('create-id-card')}
                        className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Issue New Card
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#009B8C] to-[#00706A] px-6 py-4">
                    <h3 className="text-white font-semibold">Employee ID Cards</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Employee
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Badge Number
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Department
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Card Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Expiry Date
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {idCards.map((card) => (
                                <tr
                                    key={card.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                <CreditCard className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {card.employeeName}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    {card.position}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                        {card.badgeNumber}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {card.department}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {card.cardType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${card.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : card.status === 'Temporary'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                                }`}
                                        >
                                            {card.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {card.expiryDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">
                                            View
                                        </button>
                                        <button className="text-green-600 hover:text-green-800 font-medium">
                                            Renew
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const StickersView = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentView('dashboard')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Vehicle Stickers
                        </h2>
                        <p className="text-gray-600">Manage your vehicle access permits</p>
                    </div>
                </div>
                <button
                    onClick={() => setCurrentView('create-sticker')}
                    className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg">
                    <Plus className="w-4 h-4 mr-2" />
                    New Sticker
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#009B8C] to-[#00706A] px-6 py-4">
                    <h3 className="text-white font-semibold">Active Vehicle Stickers</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Vehicle
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Owner
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Sticker Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    License Plate
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {stickers.map((sticker) => (
                                <tr
                                    key={sticker.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                <Car className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {sticker.model}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Vehicle #{sticker.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {sticker.owner}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {sticker.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                                        {sticker.plate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${sticker.status === 'Approved'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}
                                        >
                                            {sticker.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const MeetingManagement = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentView('dashboard')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Meeting Management
                        </h2>
                        <p className="text-gray-600">Schedule and manage meetings</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Filter className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Search className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                    <button
                        onClick={() => setCurrentView('create-meeting')}
                        className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Initiate Meeting
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#009B8C] to-[#00706A] px-6 py-4">
                    <h3 className="text-white font-semibold">Meeting Requests</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Company
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Meeting Date & Time
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Room/Location
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Meeting Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {meetingRequests.map((request) => (
                                <tr
                                    key={request.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                <Calendar className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {request.companyName}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Contact: {request.contactPerson}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div>{request.meetingDate}</div>
                                        <div className="text-xs text-gray-500">
                                            {request.meetingTime}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {request.room}
                                        </div>
                                        <div className="text-xs text-gray-500">{request.meetingType}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${request.status === 'Pending Approval'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : request.status === 'Approved'
                                                    ? 'bg-green-100 text-green-800'
                                                    : request.status === 'Completed'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                                            {request.meetingType}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="text-blue-600 hover:text-blue-800 font-medium">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const SecurityViolations = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentView('dashboard')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Security Violations
                        </h2>
                        <p className="text-gray-600">Monitor and manage security incidents</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Filter className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <Search className="w-4 h-4 text-gray-400" />
                        </button>
                    </div>
                    <button
                        onClick={() => setCurrentView('create-security-violation')}
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-red-700 hover:to-red-800 transition-all shadow-lg">
                        <Plus className="w-4 h-4 mr-2" />
                        Report Incident
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4">
                    <h3 className="text-white font-semibold">Recent Security Violations</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Incident
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date & Time
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Location
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Severity
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {securityViolations.map((violation) => (
                                <tr
                                    key={violation.id}
                                    className="hover:bg-red-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                                                <AlertTriangle className="w-5 h-5 text-red-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {violation.type}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    ID: #{violation.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div>{violation.date}</div>
                                        <div className="text-xs text-gray-500">
                                            {violation.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {violation.location}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            Reported by: {violation.reportedBy}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${violation.severity === 'High'
                                                ? 'bg-red-100 text-red-800'
                                                : violation.severity === 'Medium'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-green-100 text-green-800'
                                                }`}
                                        >
                                            {violation.severity}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${violation.status === 'Under Investigation'
                                                ? 'bg-orange-100 text-orange-800'
                                                : violation.status === 'Resolved'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {violation.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <button className="text-red-600 hover:text-red-800 font-medium">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    // Create ID Card Form
    const CreateIDCard = () => {
        const [step, setStep] = useState(1);

        return (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => setCurrentView('id-cards')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Issue New ID Card
                        </h2>
                        <p className="text-gray-700">Step {step} of 2</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#009B8C]">Progress</span>
                        <span className="text-sm font-medium text-[#009B8C]">
                            {Math.round((step / 2) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#009B8C] to-[#00706A] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 2) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {step === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Employee Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Employee ID *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter employee ID"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter full name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Department *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Department</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="neurology">Neurology</option>
                                        <option value="emergency">Emergency Medicine</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="it-services">IT Services</option>
                                        <option value="administration">Administration</option>
                                        <option value="security">Security</option>
                                        <option value="maintenance">Maintenance</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Position/Title *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter position"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Card Type *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Card Type</option>
                                        <option value="employee">Employee</option>
                                        <option value="medical-staff">Medical Staff</option>
                                        <option value="contractor">Contractor</option>
                                        <option value="visitor">Visitor</option>
                                        <option value="temporary">Temporary</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Access Level
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="standard">Standard Access</option>
                                        <option value="restricted">Restricted Access</option>
                                        <option value="high-security">High Security</option>
                                        <option value="emergency-only">Emergency Only</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Issue Date *
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Expiry Date *
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setCurrentView('id-cards')}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-3 bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white rounded-xl hover:from-[#00706A] hover:to-[#009B8C] transition-all"
                                >
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                Photo & Additional Information
                            </h3>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <h4 className="font-semibold text-blue-900 mb-4">
                                    Employee Photo
                                </h4>
                                <div className="flex items-center space-x-6">
                                    <div className="w-32 h-32 bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                                        <div className="text-center">
                                            <Camera className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                                            <p className="text-sm text-gray-500">Upload Photo</p>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm"
                                        />
                                        <p className="text-xs text-gray-500 mt-2">
                                            Upload a passport-sized photo (max 2MB, JPG/PNG format)
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        National ID / Iqama Number
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter ID number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Emergency Contact
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+966 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Blood Type
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Blood Type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Badge Number
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 bg-gray-100"
                                        placeholder="Auto-generated"
                                        disabled
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Special Notes/Medical Conditions
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-24 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Any special medical conditions, allergies, or access requirements..."
                                />
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                                    <div>
                                        <h5 className="font-medium text-yellow-800 mb-1">Important Notice</h5>
                                        <p className="text-sm text-yellow-700">
                                            All ID card requests require approval from HR and Security departments.
                                            Processing time is typically 2-3 business days. Emergency cards can be issued within 4 hours with proper authorization.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Previous
                                </button>
                                <div className="space-x-3">
                                    <button className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                                        Save Draft
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCurrentView('id-cards');
                                            setStep(1);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                                    >
                                        Submit for Approval
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Create Vehicle Sticker Form
    const CreateSticker = () => {
        const [step, setStep] = useState(1);

        return (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => setCurrentView('stickers')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Request Vehicle Sticker
                        </h2>
                        <p className="text-gray-700">Step {step} of 2</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#009B8C]">Progress</span>
                        <span className="text-sm font-medium text-[#009B8C]">
                            {Math.round((step / 2) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#009B8C] to-[#00706A] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 2) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {step === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Vehicle Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        License Plate Number *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter license plate"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Vehicle Make *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., Toyota, BMW, Ford"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Vehicle Model *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., Camry, X5, F-150"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Year *
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="2023"
                                        min="1980"
                                        max="2025"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Vehicle Color *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., White, Black, Blue"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Vehicle Type *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Vehicle Type</option>
                                        <option value="car">Car</option>
                                        <option value="suv">SUV</option>
                                        <option value="truck">Truck</option>
                                        <option value="van">Van</option>
                                        <option value="motorcycle">Motorcycle</option>
                                        <option value="bus">Bus</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Owner Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Vehicle owner name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Relationship to Requestor
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="self">Self</option>
                                        <option value="spouse">Spouse</option>
                                        <option value="family-member">Family Member</option>
                                        <option value="company">Company Vehicle</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setCurrentView('stickers')}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-3 bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white rounded-xl hover:from-[#00706A] hover:to-[#009B8C] transition-all"
                                >
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                Sticker Type & Documentation
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Sticker Type *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Sticker Type</option>
                                        <option value="employee">Employee</option>
                                        <option value="visitor">Visitor</option>
                                        <option value="contractor">Contractor</option>
                                        <option value="emergency">Emergency Services</option>
                                        <option value="delivery">Delivery/Service</option>
                                        <option value="vip">VIP</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Validity Period *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Validity</option>
                                        <option value="temporary">Temporary (1-30 days)</option>
                                        <option value="6-months">6 Months</option>
                                        <option value="1-year">1 Year</option>
                                        <option value="permanent">Permanent</option>
                                    </select>
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <h4 className="font-semibold text-blue-900 mb-4">
                                    Required Documents
                                </h4>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-2">
                                            Vehicle Registration (Mulkiya)
                                        </label>
                                        <input
                                            type="file"
                                            accept=".pdf,.jpg,.png"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-2">
                                            Driver's License
                                        </label>
                                        <input
                                            type="file"
                                            accept=".pdf,.jpg,.png"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-2">
                                            Insurance Certificate
                                        </label>
                                        <input
                                            type="file"
                                            accept=".pdf,.jpg,.png"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Preferred Parking Zone
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Parking Zone</option>
                                        <option value="main-building">Main Building</option>
                                        <option value="emergency">Emergency Department</option>
                                        <option value="outpatient">Outpatient Clinic</option>
                                        <option value="staff">Staff Parking</option>
                                        <option value="visitor">Visitor Parking</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Emergency Contact
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+966 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Additional Notes/Special Requirements
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-24 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Any special requirements, disability access needs, or additional information..."
                                />
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                                    <div>
                                        <h5 className="font-medium text-yellow-800 mb-1">Important Notice</h5>
                                        <p className="text-sm text-yellow-700">
                                            Vehicle stickers are subject to security approval and parking regulations.
                                            Processing time is 1-2 business days. Temporary stickers can be issued immediately for emergency purposes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Previous
                                </button>
                                <div className="space-x-3">
                                    <button className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                                        Save Draft
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCurrentView('stickers');
                                            setStep(1);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Create Security Violation Form
    const CreateSecurityViolation = () => {
        return (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => setCurrentView('security')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Report Security Violation
                        </h2>
                        <p className="text-gray-700">File an incident report</p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                            <div>
                                <h5 className="font-medium text-red-800 mb-1">Emergency Situations</h5>
                                <p className="text-sm text-red-700">
                                    For immediate emergencies requiring security response, call Security directly at
                                    <strong> 999</strong> or use the emergency alert system.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-6 text-gray-900">Incident Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Incident Type *
                            </label>
                            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Incident Type</option>
                                <option value="unauthorized-access">Unauthorized Access</option>
                                <option value="badge-violation">Badge Violation</option>
                                <option value="vehicle-violation">Vehicle Violation</option>
                                <option value="suspicious-activity">Suspicious Activity</option>
                                <option value="theft">Theft/Missing Items</option>
                                <option value="vandalism">Vandalism</option>
                                <option value="harassment">Harassment</option>
                                <option value="safety-violation">Safety Violation</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Severity Level *
                            </label>
                            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Severity</option>
                                <option value="low">Low - Minor infraction</option>
                                <option value="medium">Medium - Policy violation</option>
                                <option value="high">High - Security threat</option>
                                <option value="critical">Critical - Immediate danger</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Date of Incident *
                            </label>
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                defaultValue={new Date().toISOString().split('T')[0]}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Time of Incident *
                            </label>
                            <input
                                type="time"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Location of Incident *
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="e.g., Main Building - Floor 3, Parking Lot B, Emergency Department"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Detailed Description *
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Provide a detailed description of what happened, including any relevant circumstances, people involved, and actions taken..."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Reporter Name *
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your name"
                                defaultValue="Hadi Fadl"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Reporter Department
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your department"
                                defaultValue="IT Services"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Contact Number
                            </label>
                            <input
                                type="tel"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="+966 XX XXX XXXX"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-2">
                                Witnesses (if any)
                            </label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Names of witnesses"
                            />
                        </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h4 className="font-semibold text-blue-900 mb-4">
                            Supporting Evidence (Optional)
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Photos/Videos
                                </label>
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    multiple
                                    className="w-full border border-gray-300 text-black rounded-lg px-3 py-2 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Documents/Reports
                                </label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    multiple
                                    className="w-full border text-black border-gray-300 rounded-lg px-3 py-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                            Immediate Actions Taken
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 h-24 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Describe any immediate actions taken in response to the incident..."
                        />
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                            <div>
                                <h5 className="font-medium text-yellow-800 mb-1">Confidentiality Notice</h5>
                                <p className="text-sm text-yellow-700">
                                    This report will be treated confidentially and shared only with authorized security personnel
                                    and relevant department heads for investigation and resolution purposes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={() => setCurrentView('security')}
                            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <div className="space-x-3">
                            <button className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                                Save Draft
                            </button>
                            <button
                                onClick={() => setCurrentView('security')}
                                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all"
                            >
                                Submit Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // Create Meeting Request form (updated version)
    const CreateMeetingRequest = () => {
        const [step, setStep] = useState(1);

        // Generate time slots from 8 AM to 6 PM
        const generateTimeSlots = () => {
            const slots = [];
            for (let hour = 8; hour < 18; hour++) {
                const startTime = hour < 12 ? `${hour}:00 AM` : hour === 12 ? `12:00 PM` : `${hour - 12}:00 PM`;
                const endTime = (hour + 1) < 12 ? `${hour + 1}:00 AM` : (hour + 1) === 12 ? `12:00 PM` : `${hour + 1 - 12}:00 PM`;
                slots.push(`${startTime} - ${endTime}`);
            }
            return slots;
        };

        const timeSlots = generateTimeSlots();

        return (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => setCurrentView('meetings')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Initiate Meeting
                        </h2>
                        <p className="text-gray-700">Step {step} of 2</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#009B8C]">Progress</span>
                        <span className="text-sm font-medium text-[#009B8C]">
                            {Math.round((step / 2) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#009B8C] to-[#00706A] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 2) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {step === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Company Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Company Name *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter company name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Commercial Registration No.
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter CR number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Meeting Category *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Category</option>
                                        <option value="medical-equipment">Medical Equipment</option>
                                        <option value="it-services">IT Services</option>
                                        <option value="maintenance">Maintenance & Cleaning</option>
                                        <option value="construction">Construction</option>
                                        <option value="food-services">Food Services</option>
                                        <option value="security">Security Services</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Primary Contact Person *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Contact person name"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Contact Email *
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="contact@company.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Contact Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="+966 XX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setCurrentView('meetings')}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setStep(2)}
                                    className="px-6 py-3 bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white rounded-xl hover:from-[#00706A] hover:to-[#009B8C] transition-all"
                                >
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                Meeting Details
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Date of Meeting *
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Meeting Timings *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Time Slot</option>
                                        {timeSlots.map((slot, index) => (
                                            <option key={index} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Meeting Description *
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Detailed description of the meeting purpose and agenda..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Preferred Meeting Room *
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="">Select Meeting Room</option>
                                        <option value="conference-room-a">Conference Room A (20 people)</option>
                                        <option value="conference-room-b">Conference Room B (10 people)</option>
                                        <option value="board-room">Board Room (15 people)</option>
                                        <option value="demo-room">Equipment Demo Room (8 people)</option>
                                        <option value="virtual-meeting">Virtual Meeting</option>
                                        <option value="outdoor-area">Outdoor Meeting Area</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Expected Attendees *
                                    </label>
                                    <input
                                        type="number"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Number of attendees"
                                        min="1"
                                        max="50"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Meeting Type
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="business-presentation">Business Presentation</option>
                                        <option value="product-demo">Product Demonstration</option>
                                        <option value="consultation">Consultation</option>
                                        <option value="training">Training Session</option>
                                        <option value="interview">Interview</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Department/Sponsor *
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Sponsoring department"
                                    />
                                </div>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <h4 className="font-semibold text-blue-900 mb-4">
                                    Equipment & Setup Requirements
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        'Projector/Screen',
                                        'Audio System',
                                        'Video Conferencing',
                                        'Whiteboard',
                                        'Laptops/Tablets',
                                        'Refreshments',
                                        'Recording Equipment',
                                        'Internet Access'
                                    ].map((item) => (
                                        <label key={item} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Additional Notes/Special Requirements
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-24 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Any special requirements, accessibility needs, or additional notes..."
                                />
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                                    <div>
                                        <h5 className="font-medium text-yellow-800 mb-1">Important Notice</h5>
                                        <p className="text-sm text-yellow-700">
                                            All meeting requests are subject to room availability and approval by the Administration Department.
                                            Processing time is typically 1-2 business days. Priority is given to urgent medical and operational meetings.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Previous
                                </button>
                                <div className="space-x-3">
                                    <button className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors">
                                        Save Draft
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCurrentView('meetings');
                                            setStep(1);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all"
                                    >
                                        Submit for Approval
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderCurrentView = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard />;
            case 'id-cards':
                return <IDCardManagement />;
            case 'create-id-card':
                return <CreateIDCard />;
            case 'stickers':
                return <StickersView />;
            case 'create-sticker':
                return <CreateSticker />;
            case 'meetings':
                return <MeetingManagement />;
            case 'create-meeting':
                return <CreateMeetingRequest />;
            case 'security':
                return <SecurityViolations />;
            case 'create-security-violation':
                return <CreateSecurityViolation />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex max-h-screen bg-gray-100 overflow-hidden">
            <Sidebar />
            <div className="flex-1 min-h-screen overflow-auto">
                {renderCurrentView()}
            </div>
        </div>
    );
};

export default JohnsHopkinsDigitalOffice;