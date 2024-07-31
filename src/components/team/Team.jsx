import React from 'react';

const inputStyle = 'border p-3 rounded-md text-base font-normal w-full  bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none  '

const Team = () => {
    return (
        <main className="flex-1 mt-8 ">
            <div className="main-content ">
                <div className="form team-form space-y-6">
                    <div className="team-member p-6 bg-white shadow-2xl rounded-lg">
                        {/* <div className="mb-6">
                            <h2 className="text-2xl font-semibold">Add Team Member</h2>
                        </div> */}
                        <div className="grid grid-cols-2 gap-4 m-auto text-start text-lg font-medium">
                            <div className="input-field ">
                                <label   htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className={inputStyle}
                                    placeholder="Enter name"
                                />
                            </div>
                            <div className="input-field ">
                                <label   htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className={inputStyle}
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="input-field mb-4">
                                <label   htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className={inputStyle}
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>
                        <div className="input-field mb-4">
                            <label className="block text-lg font-medium mb-1 text-left" htmlFor="access">Access to Pages</label>
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
                        <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={() => navigate("/dashboard")}>
                            Add Team Member
                        </button>
                        <div className="divider border-t border-gray-300 my-6"></div>
                    <div className="existing-team">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-900">Existing Team Members</h3>
                        {/* This section will list existing team members dynamically */}
                    </div>
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Team;
