// MOCK DATA BASED ON REAL SCHEMA
const MOCK_DATA = {
    users: [
        { id: '1', username: 'admin', name: 'Super Admin', email: 'admin@zakat.com', role: 'super_admin', isActive: true },
        { id: '2', username: 'manager1', name: 'Budi Manager', email: 'manager@zakat.com', role: 'manajer', isActive: true },
        { id: '3', username: 'surveyor1', name: 'Siti Surveyor', email: 'surveyor@zakat.com', role: 'surveyor', isActive: true },
        { id: '4', username: 'mustahik1', name: 'Ahmad Mustahik', email: 'ahmad@gmail.com', role: 'mustahik', isActive: true }
    ],
    mustahik: [
        {
            id: 'mustAH-001', userId: '4', name: 'Ahmad Mustahik', address: 'Jl. Merdeka No. 10, Jakarta', phone: '08123456789',
            businessStatus: 'sedang_jalan', registeredDate: '2025-01-10T10:00:00Z',
            subCriteria: { pendapatan: 1500000, tanggungan: 4, status_rumah: 2, aset: 1000000 }
        },
        {
            id: 'mustAH-002', name: 'Ibu Sarah', address: 'Jl. Mawar No. 5, Bandung', phone: '08567891234',
            businessStatus: 'belum_usaha', registeredDate: '2025-02-05T14:30:00Z',
            subCriteria: { pendapatan: 800000, tanggungan: 5, status_rumah: 1, aset: 500000 }
        }
    ],
    programs: [
        {
            id: 'PRG-001', name: 'Zakat Modal Usaha Micro', description: 'Bantuan modal untuk pedagang kecil guna meningkatkan ekonomi keluarga.',
            totalBudget: 150000000, budgetPerRecipient: 5000000, status: 'active', createdAt: '2025-01-01T00:00:00Z'
        },
        {
            id: 'PRG-002', name: 'Beasiswa Anak Mustahik', description: 'Bantuan pendidikan tingkat sekolah dasar untuk anak-anak mustahik berprestasi.',
            totalBudget: 50000000, budgetPerRecipient: 2000000, status: 'active', createdAt: '2025-01-15T00:00:00Z'
        }
    ],
    criteria: [
        {
            code: 'C1',
            name: 'Pendidikan',
            weight: 0.10,
            icon: 'BookOpen',
            color: 'bg-sky-400',
            description: 'Menilai tingkat pendidikan kepala keluarga',
            type: 'benefit',
            aspects: [
                {
                    code: 'C1A',
                    name: 'Tingkat Pendidikan',
                    options: [
                        { label: 'Tidak sekolah / buta huruf', value: 0 },
                        { label: 'Tamat SD', value: 2 },
                        { label: 'Tamat SMP', value: 4 },
                        { label: 'Tamat SMA', value: 6 },
                        { label: 'Perguruan Tinggi', value: 9 },
                    ]
                }
            ]
        },
        {
            code: 'C2',
            name: 'Kesehatan',
            weight: 0.15,
            icon: 'Heart',
            color: 'bg-rose-400',
            description: 'Menilai kondisi fisik dan kesehatan keluarga',
            type: 'benefit',
            aspects: [
                {
                    code: 'C2A',
                    name: 'Kondisi Fisik',
                    options: [
                        { label: 'Sangat sakit / tidak mampu bekerja', value: 0 },
                        { label: 'Sakit menahun', value: 4 },
                        { label: 'Sering sakit ringan', value: 8 },
                        { label: 'Sehat & produktif', value: 10 },
                    ]
                }
            ]
        },
        {
            code: 'C3',
            name: 'Kelayakan Hunian',
            weight: 0.15,
            icon: 'Home',
            color: 'bg-amber-400',
            description: 'Menilai kondisi fisik, kepadatan, dan fasilitas rumah',
            type: 'benefit',
            aspects: [
                {
                    code: 'C3A',
                    name: 'Struktur Rumah',
                    options: [
                        { label: 'Tidak layak (bambu/tanah)', value: 0 },
                        { label: 'Semi permanen', value: 4 },
                        { label: 'Permanen sederhana', value: 9 },
                    ]
                }
            ]
        },
        {
            code: 'C5',
            name: 'Pendapatan',
            weight: 0.20,
            icon: 'DollarSign',
            color: 'bg-emerald-400',
            description: 'Mengukur kemampuan ekonomi rumah tangga',
            type: 'cost',
            aspects: [
                {
                    code: 'C5A',
                    name: 'Pendapatan Bulanan',
                    options: [
                        { label: '< 1 Juta', value: 20 },
                        { label: '1 - 2.5 Juta', value: 12 },
                        { label: '> 2.5 Juta', value: 0 },
                    ]
                }
            ]
        }
    ],
    history: [
        { id: 'HIST-001', mustahikId: 'mustAH-001', mustahikName: 'Ahmad Mustahik', programId: 'PRG-001', programName: 'Zakat Modal Usaha Micro', amount: 5000000, receivedDate: '2025-01-20T00:00:00Z', status: 'completed' }
    ],
    monitoring: [
        {
            id: 'MON-001', mustahikId: 'mustAH-001', mustahikName: 'Ahmad Mustahik', programId: 'PRG-001', programName: 'Zakat Modal Usaha Micro',
            businessProgress: {
                businessStatus: 'Menurun',
                revenue: 1200000,
                businessType: 'Kuliner',
                profit: -200000
            },
            monitoringDate: '2025-02-15T10:00:00Z',
            socialEconomicCondition: { monthlyIncome: 1200000, monthlyExpenditure: 1500000 }
        },
        {
            id: 'MON-002', mustahikId: 'mustAH-002', mustahikName: 'Ibu Sarah', programId: 'PRG-001', programName: 'Zakat Modal Usaha Micro',
            businessProgress: {
                businessStatus: 'Maju',
                revenue: 8500000,
                businessType: 'Dagang',
                profit: 4000000
            },
            monitoringDate: '2025-02-18T10:00:00Z',
            socialEconomicCondition: { monthlyIncome: 8500000, monthlyExpenditure: 4500000 }
        }
    ]
};

// HELPER FOR ASYNC MOCKING
const isStaticMode = typeof window !== 'undefined' && (window.location.search.includes('figma=true') || window.location.search.includes('static=true'));

const mockDelay = <T>(data: T): Promise<T> => {
    if (isStaticMode) return Promise.resolve(data);
    return new Promise(resolve => setTimeout(() => resolve(data), 300));
};

export const api = {
    login: async (credentials: any) => mockDelay({ token: 'mock-token', user: MOCK_DATA.users[0] }),
    register: async (data: any) => mockDelay({ token: 'mock-token', user: { ...data, id: Date.now().toString(), role: 'mustahik' } }),
    getUsers: async (): Promise<any[]> => mockDelay(MOCK_DATA.users),
    addUser: async (data: any) => mockDelay({ ...data, id: Date.now().toString() }),
    updateUser: async (id: string, data: any) => mockDelay({ ...data, id }),
    deleteUser: async (id: string) => mockDelay(null),
    getMustahik: async (): Promise<any[]> => mockDelay(MOCK_DATA.mustahik),
    createMustahik: async (data: any) => mockDelay({ ...data, id: `mustAH-${Date.now()}` }),
    updateMustahik: async (id: string, data: any) => mockDelay({ ...data, id }),
    deleteMustahik: async (id: string) => mockDelay(null),
    getCriteria: async (): Promise<any[]> => mockDelay(MOCK_DATA.criteria),
    updateCriteria: async (data: any) => mockDelay(data),
    getPrograms: async (): Promise<any[]> => mockDelay(MOCK_DATA.programs),
    createProgram: async (data: any) => mockDelay({ ...data, id: `PRG-${Date.now()}` }),
    updateProgram: async (id: string, data: any) => mockDelay({ ...data, id }),
    deleteProgram: async (id: string) => mockDelay(null),
    getHistory: async (): Promise<any[]> => mockDelay(MOCK_DATA.history),
    createHistory: async (data: any) => mockDelay({ ...data, id: `HIST-${Date.now()}` }),
    getMonitoring: async (): Promise<any[]> => mockDelay(MOCK_DATA.monitoring),
    createMonitoring: async (data: any) => mockDelay({ ...data, id: `MON-${Date.now()}` })
};

export const API_URL = 'MOCKUP_MODE';
