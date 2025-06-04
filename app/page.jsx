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
} from 'lucide-react';

const JohnsHopkinsDigitalOffice = () => {
    const [currentView, setCurrentView] = useState('dashboard');
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Johns Hopkins Brand Colors
    // const colors = {
    //     primary: '#003B7A', // Heritage Blue
    //     secondary: '#F2C413', // Gold
    //     accent: '#1E376D', // Rainbow Indigo
    //     light: '#9EA2C6', // Blue Bell
    //     success: '#10B981',
    //     warning: '#F59E0B',
    //     error: '#EF4444',
    //     gray: {
    //         50: '#F8FAFC',
    //         100: '#F1F5F9',
    //         200: '#E2E8F0',
    //         300: '#CBD5E1',
    //         400: '#94A3B8',
    //         500: '#64748B',
    //         600: '#475569',
    //         700: '#334155',
    //         800: '#1E293B',
    //         900: '#0F172A',
    //     },
    // };
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
    const familyMembers = [
        {
            id: 1,
            name: 'Hadi Al Fadl',
            relation: 'SELF',
            expiry: '05/05/2025',
            status: 'Active',
        },
        {
            id: 2,
            name: 'Ahmed Fadl',
            relation: 'Son',
            expiry: '30/11/2026',
            status: 'Active',
        },
        {
            id: 3,
            name: 'Abu Eiz abu Hadi',
            relation: 'Father',
            expiry: '20/06/2027',
            status: 'Active',
        },
        {
            id: 4,
            name: 'Majeed SOMEABLE Moorlakaga',
            relation: 'Servant',
            expiry: '30/07/2025',
            status: 'Active',
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
        },
        {
            id: 2,
            type: 'COMMUNITY RWCAMP',
            model: 'KIA 2023',
            expiry: 'Permanent',
            plate: '6876603',
            status: 'Approved',
        },
        {
            id: 3,
            type: 'COMMUNITY RWCAMP',
            model: 'AUDI 2016',
            expiry: 'Permanent',
            plate: '24758486',
            status: 'Approved',
        },
        {
            id: 4,
            type: 'COMMUNITY RWCAMP',
            model: 'AMMONIA 2015',
            expiry: 'Permanent',
            plate: '1744',
            status: 'Rejected',
        },
    ];

    const visitRequests = [
        {
            id: 1802,
            startDate: '06/05/2025',
            endDate: '06/03/2025',
            area: 'ÄRÖNÖ',
            gate: 'Post Name Long 21',
            status: 'Pending Approval',
            type: 'Business Temporary',
        },
        {
            id: 1844,
            startDate: '05/24/2025',
            endDate: '05/30/2025',
            area: 'DHARRAN (INDUSTRIAL)',
            gate: 'LONG 214',
            status: 'Expired',
            type: 'Business Temporary',
        },
        {
            id: 1845,
            startDate: '05/24/2025',
            endDate: '05/30/2025',
            area: 'HAWIYAH',
            gate: '',
            status: 'Expired',
            type: 'In camp',
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
            className="w-72 min-h-screen shadow-2xl relative"
            style={{
                background: `linear-gradient(180deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
            }}
        >
            {/* Header */}
            <div className="p-6 border-b border-blue-700/30">
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
                    {
                        id: 'family',
                        icon: Users,
                        label: 'Family & Dependents',
                        badge: '4',
                    },
                    { id: 'stickers', icon: Car, label: 'Vehicle Stickers', badge: null },
                    {
                        id: 'visits',
                        icon: UserCheck,
                        label: 'Visitor Management',
                        badge: '3',
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
                    <div className="text-blue-300 text-xs uppercase tracking-wider mb-2">
                        Organization
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                        Johns Hopkins
                    </h4>
                    <h5 className="text-white font-medium text-sm mb-2">
                        Aramco Healthcare
                    </h5>

                    <div className="text-xs space-y-1">
                        <div className="text-blue-300">Position</div>
                        <div className="text-white">Internal Staffing Div</div>
                        <div className="text-blue-400">ID: 300033502</div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4">
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

    const StatCard = ({ title, value, icon: Icon, color, trend }) => (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
                <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center`}
                    style={{ backgroundColor: `${color}20` }}
                >
                    <Icon className="w-6 h-6" style={{ color }} />
                </div>
                {trend && (
                    <span
                        className={`text-xs px-2 py-1 rounded-full ${trend > 0
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600'
                            }`}
                    >
                        {trend > 0 ? '+' : ''}
                        {trend}%
                    </span>
                )}
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
            <p className="text-gray-600 text-sm">{title}</p>
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

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Active Family Members"
                    value="4"
                    icon={Users}
                    color={colors.primary}
                    trend={0}
                />
                <StatCard
                    title="Vehicle Stickers"
                    value="3"
                    icon={Car}
                    color={colors.success}
                    trend={25}
                />
                <StatCard
                    title="Pending Visits"
                    value="2"
                    icon={UserCheck}
                    color={colors.warning}
                    trend={-10}
                />
                <StatCard
                    title="System Health"
                    value="98%"
                    icon={Shield}
                    color={colors.secondary}
                    trend={2}
                />
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

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                    {
                        id: 'id-card',
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
                        id: 'visits',
                        title: 'Temporary Visits',
                        icon: Users,
                        color: colors.warning,
                        description: 'Guest access management',
                    },
                    {
                        id: 'easy-pass',
                        title: 'Easy Pass',
                        icon: UserCheck,
                        color: colors.accent,
                        description: 'Quick facility access',
                    },
                    {
                        id: 'app-enrollment',
                        title: 'App Enrollment',
                        icon: Smartphone,
                        color: colors.secondary,
                        description: 'Mobile app registration',
                    },
                ].map((service) => (
                    <div
                        key={service.id}
                        onClick={() =>
                            service.id === 'stickers'
                                ? setCurrentView('stickers')
                                : service.id === 'visits'
                                    ? setCurrentView('visits')
                                    : null
                        }
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
        </div>
    );

    const FamilyView = () => (
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
                            Family Members & Dependents
                        </h2>
                        <p className="text-gray-600">
                            Manage your family and dependent information
                        </p>
                    </div>
                </div>
                <div className="flex space-x-3">
                    <button className="bg-blue-100 text-[#009B8C] px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-200 transition-colors">
                        In Process Requests
                    </button>
                    <button className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Dependent
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#009B8C] to-[#00706A] px-6 py-4">
                    <h3 className="text-white font-semibold">Active Family Members</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Member
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Relation
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    ID Expiry
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
                            {familyMembers.map((member, index) => (
                                <tr
                                    key={member.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div
                                                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mr-4"
                                                style={{
                                                    backgroundColor: `${colors.primary}${Math.floor(Math.random() * 40) + 60
                                                        }`,
                                                }}
                                            >
                                                {member.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {member.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Member #{member.id}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {member.relation}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {member.expiry}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                                        <button
                                            onClick={() => {
                                                setSelectedEmployee(member);
                                                setCurrentView('employee-details');
                                            }}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
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

    const EmployeeDetails = () => (
        <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <button
                        onClick={() => setCurrentView('family')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            Employee Details
                        </h2>
                        <p className="text-gray-600">Badge No: 200011</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Card */}
                <div className="lg:col-span-1">
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <div className="text-center mb-6">
                            <div
                                className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold"
                                style={{ backgroundColor: colors.primary }}
                            >
                                HF
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">Hadi Fadl</h3>
                            <p className="text-gray-600">Internal Auditing</p>
                        </div>

                        <button className="w-full bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white py-3 rounded-xl font-medium hover:from-[#00706A] hover:to-[#009B8C] transition-all">
                            View ID Image
                        </button>
                    </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Personal Details */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-lg text-black font-semibold mb-6 pb-3 border-b border-gray-200">
                            Personal Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { label: 'First Name', value: 'Hadi' },
                                { label: 'Last Name', value: 'Fadl' },
                                { label: 'Middle Name', value: 'M' },
                                { label: 'Date of Birth', value: '1980-07-13' },
                                { label: 'Blood Group', value: 'O+' },
                                { label: 'Nationality', value: 'Saudi Arabia' },
                                { label: 'Religion', value: 'Muslim' },
                                { label: 'Gender', value: 'Male' },
                                { label: 'Mobile Number', value: '+966 50 123 4567' },
                            ].map((item, index) => (
                                <div key={index} className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">
                                        {item.label}
                                    </label>
                                    <div className="text-sm text-gray-900 font-medium">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Identification Details */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-lg text-black font-semibold mb-6 pb-3 border-b border-gray-200">
                            Identification Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-sm font-medium text-gray-500">
                                    Government ID No
                                </label>
                                <div className="text-sm text-gray-900 font-medium">
                                    1096015000
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hiring Details */}
                    <div className="bg-white rounded-2xl shadow-xl p-6">
                        <h3 className="text-lg text-black font-semibold mb-6 pb-3 border-b border-gray-200">
                            Hiring Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'Org Code', value: '30001608' },
                                { label: 'Organization', value: 'Internal Auditing' },
                                { label: 'Job Code', value: '506002084' },
                            ].map((item, index) => (
                                <div key={index} className="space-y-1">
                                    <label className="text-sm font-medium text-gray-500">
                                        {item.label}
                                    </label>
                                    <div className="text-sm text-gray-900 font-medium">
                                        {item.value}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
                <button className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg">
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
                                    Sticker Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Expiry
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
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {sticker.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm text-orange-600 font-medium">
                                            {sticker.expiry}
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

    const VisitorManagement = () => (
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
                            Visitor Management
                        </h2>
                        <p className="text-gray-600">Manage visitor access and requests</p>
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
                        onClick={() => setCurrentView('create-visit')}
                        className="bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white px-6 py-2 rounded-xl text-sm font-medium flex items-center hover:from-[#00706A] hover:to-[#009B8C] transition-all shadow-lg"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Create Request
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-[#009B8C] to-[#00706A] px-6 py-4">
                    <h3 className="text-white font-semibold">My Visit Requests</h3>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Request
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Duration
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Location
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {visitRequests.map((request) => (
                                <tr
                                    key={request.id}
                                    className="hover:bg-blue-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                <UserCheck className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    #{request.id}
                                                </div>
                                                <div className="text-xs text-gray-500">
                                                    Visit Request
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <div>{request.startDate}</div>
                                        <div className="text-xs text-gray-500">
                                            to {request.endDate}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {request.area}
                                        </div>
                                        <div className="text-xs text-gray-500">{request.gate}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${request.status === 'Pending Approval'
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : request.status === 'Expired'
                                                    ? 'bg-red-100 text-red-800'
                                                    : 'bg-gray-100 text-gray-800'
                                                }`}
                                        >
                                            {request.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                            {request.type}
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

    const CreateVisitRequest = () => {
        const [step, setStep] = useState(1);
        const [currentView, setCurrentView] = useState('create');

        return (
            <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
                <div className="flex items-center mb-8">
                    <button
                        onClick={() => setCurrentView('visits')}
                        className="mr-4 p-2 rounded-full hover:bg-white transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Create Business Access Request
                        </h2>
                        <p className="text-gray-700">Step {step} of 3</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-[#009B8C]">Progress</span>
                        <span className="text-sm font-medium text-[#009B8C]">
                            {Math.round((step / 3) * 100)}%
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-[#009B8C] to-[#00706A] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {step === 1 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">Visit Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        From Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        defaultValue="2025-06-03"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        To Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        defaultValue="2025-06-06"
                                    />
                                </div>
                            </div>

                            <h4 className="text-lg font-semibold mb-4 text-gray-900">
                                Visit Purpose & Location
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Purpose
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="" className="text-gray-500">Select Purpose</option>
                                        <option value="meeting" className="text-gray-900">Meeting</option>
                                        <option value="conference" className="text-gray-900">Conference</option>
                                        <option value="training" className="text-gray-900">Training</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Area
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="" className="text-gray-500">Select Area</option>
                                        <option value="main-campus" className="text-gray-900">Main Campus</option>
                                        <option value="research-wing" className="text-gray-900">Research Wing</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Gate
                                </label>
                                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="" className="text-gray-500">Select Gate</option>
                                    <option value="main-gate" className="text-gray-900">Main Gate</option>
                                    <option value="north-gate" className="text-gray-900">North Gate</option>
                                </select>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setCurrentView('visits')}
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
                                Purpose & Location Details
                            </h3>
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Detailed Purpose
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Participating in a meeting, seminar, conference or presentation"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Specific Area
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        defaultValue="ÄRÖNÖ"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-800 mb-2">
                                        Building/Location
                                    </label>
                                    <select className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                        <option value="" className="text-gray-500">Select Building</option>
                                        <option value="main-hospital" className="text-gray-900">Main Hospital</option>
                                        <option value="research-center" className="text-gray-900">Research Center</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setStep(1)}
                                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-50 transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="px-6 py-3 bg-gradient-to-r from-[#009B8C] to-[#00706A] text-white rounded-xl hover:from-[#00706A] hover:to-[#009B8C] transition-all"
                                >
                                    Next Step
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-gray-900">
                                Visitor & Vehicle Details
                            </h3>

                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-blue-900">
                                        Visitor Information
                                    </h4>
                                    <button className="text-[#009B8C] text-sm font-medium hover:text-blue-800">
                                        Add from Favorites
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            ID Type
                                        </label>
                                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value="national-id" className="text-gray-900">National ID</option>
                                            <option value="passport" className="text-gray-900">Passport</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Nationality
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter nationality"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            ID Number
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter ID number"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter first name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter last name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 rounded-xl p-6 mb-6">
                                <h4 className="font-semibold text-green-900 mb-4">
                                    Vehicle Details (Optional)
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Plate Type
                                        </label>
                                        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option value="private" className="text-gray-900">Private</option>
                                            <option value="commercial" className="text-gray-900">Commercial</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Plate Number
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter plate number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Manufacturer
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter manufacturer"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-800 mb-1">
                                            Color
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter color"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-sm font-medium text-gray-800 mb-2">
                                    Justification/Remarks
                                </label>
                                <textarea
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 h-24 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Enter justification (max 200 characters)"
                                    maxLength="200"
                                />
                            </div>

                            <div className="flex justify-between">
                                <button
                                    onClick={() => setStep(2)}
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
                                            setCurrentView('visits');
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

    const renderCurrentView = () => {
        switch (currentView) {
            case 'dashboard':
                return <Dashboard />;
            case 'family':
                return <FamilyView />;
            case 'employee-details':
                return <EmployeeDetails />;
            case 'stickers':
                return <StickersView />;
            case 'visits':
                return <VisitorManagement />;
            case 'create-visit':
                return <CreateVisitRequest />;
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 max-h-screen overflow-auto">
                {renderCurrentView()}
            </div>
        </div>
    );
};

export default JohnsHopkinsDigitalOffice;
