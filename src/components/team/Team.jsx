import React from 'react';

const Team = () => {
    return (
        <main className="flex-1 p-6 ">
            <div className="main-content ">
                <div className="form team-form space-y-6">
                    <div className="team-member p-6 bg-white shadow-2xl rounded-lg">
                        <h3 className="text-xl font-semibold mb-4 text-purple-900">Add Team Member</h3>
                        <div className="input-field mb-4">
                            <label className="block text-sm font-medium mb-1 text-left" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="input-field mb-4">
                            <label className="block text-sm font-medium mb-1 text-left" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="input-field mb-4">
                            <label className="block text-sm font-medium mb-1 text-left" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full p-2 border border-gray-300 rounded"
                                placeholder="Enter password"
                            />
                        </div>
                        <div className="input-field mb-4">
                            <label className="block text-sm font-medium mb-1 text-left" htmlFor="access">Access to Pages</label>
                            <div className="access-options grid grid-cols-2 gap-2">
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="dashboard" className="mr-2" /> Dashboard
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="customize" className="mr-2" /> Customize
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="history" className="mr-2" /> Chat History
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="sales" className="mr-2" /> Sales Leads
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="integration" className="mr-2" /> Integration
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="billing" className="mr-2" /> Billing
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" name="access" value="settings" className="mr-2" /> Account Settings
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800">
                            Add Team Member
                        </button>
                    </div>

                    <div className="divider border-t border-gray-300 my-6"></div>
                    <div className="existing-team">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-900">Existing Team Members</h3>
                        {/* This section will list existing team members dynamically */}
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Team;
