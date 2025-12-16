import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Home,
  FileText,
  User,
  HelpCircle,
  LogOut,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

export default function SettingsPanel() {
  const [activeView, setActiveView] = useState("main");
  const [profileData, setProfileData] = useState({
    name: "Candice",
    email: "candice@email.com",
    phone: "9956324170",
    consumerNumber: "9D7752",
    address: "Sreekariyam, 695017",
    meterId: "56677236646EET",
    registeredDate: "16th December, 2022",
  });

  const [formData, setFormData] = useState({
    landmark: "",
    category: "OWNERSHIP CHANGING",
    consumerNumber: "",
    contactPerson: "",
    remarks: "",
    mobileNumber: "",
    address: "",
  });

  const [complaintData] = useState({
    complaintNumber: "131127TL898",
    description: "Change the location of the meter pole.",
    statusTip: "SE AT OOZHOOR EPS",
    registeredDate: "06 Jan 2024",
    completionBy: "15 Feb 2024",
    status: "UNALLOCATED",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully!");
  };

  const handleProfileUpdate = () => {
    alert("Profile updated successfully!");
  };

  const renderMainMenu = () => (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {profileData.name}
            </h1>
            <p className="text-muted-foreground">
              Consumer ID: {profileData.consumerNumber}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div
            onClick={() => setActiveView("profile")}
            className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Profile Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Manage your account information
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div
            onClick={() => setActiveView("doorstep")}
            className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <Home className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Doorstep Delight Services</h3>
                <p className="text-sm text-muted-foreground">
                  Submit service requests
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div
            onClick={() => setActiveView("complaints")}
            className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Quick Fix Complaints</h3>
                <p className="text-sm text-muted-foreground">
                  Track your complaints
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Help & Support</h3>
                <p className="text-sm text-muted-foreground">
                  Get assistance and FAQs
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between rounded-lg border bg-card p-4 hover:bg-accent cursor-pointer transition-colors">
            <div className="flex items-center gap-3">
              <LogOut className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Logout</h3>
                <p className="text-sm text-muted-foreground">
                  Sign out of your account
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <button
        onClick={() => setActiveView("main")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
      </button>

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <User className="h-12 w-12 text-gray-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Profile Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your personal information
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleProfileChange}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleProfileChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Address</label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">
                  Consumer Number
                </span>
                <span className="text-sm font-medium">
                  {profileData.consumerNumber}
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b">
                <span className="text-sm text-muted-foreground">Meter ID</span>
                <span className="text-sm font-medium">
                  {profileData.meterId}
                </span>
              </div>

              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-muted-foreground">
                  Registered Date
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    {profileData.registeredDate}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <button
          onClick={handleProfileUpdate}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderDoorstepService = () => (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <button
        onClick={() => setActiveView("main")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
      </button>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Doorstep Delight Services
        </h1>
        <p className="text-muted-foreground">Submit your service request</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service at Doorsteps</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Landmark</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleInputChange}
                placeholder="Near Diamond Building"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option>OWNERSHIP CHANGING</option>
                <option>NEW CONNECTION</option>
                <option>METER INSTALLATION</option>
                <option>BILLING QUERY</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Consumer Number</label>
              <input
                type="text"
                name="consumerNumber"
                value={formData.consumerNumber}
                onChange={handleInputChange}
                placeholder="115518600163"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Person</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleInputChange}
                placeholder="Change in ownership due to the passing of the owner, and the property is inherited by another individual."
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mobile Number*</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="9956324170"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="249 Treasa Creek, New Kerry, KS 20965"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Submit
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderComplaints = () => (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <button
        onClick={() => setActiveView("main")}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-4"
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="font-medium">Back</span>
      </button>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Quick Fix Complaints
        </h1>
        <p className="text-muted-foreground">
          Track and manage your complaints
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Check Your Complaint</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted p-3">
            <p className="text-sm text-muted-foreground">Consumer Number</p>
            <p className="font-semibold">{complaintData.complaintNumber}</p>
          </div>

          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Proceed
          </button>

          <div className="space-y-3 mt-6">
            <div className="border-b pb-3">
              <p className="text-sm text-muted-foreground">Complaint Number</p>
              <p className="font-semibold">{complaintData.complaintNumber}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-sm text-muted-foreground">Description</p>
              <p className="font-medium">{complaintData.description}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-sm text-muted-foreground">Status Tips</p>
              <p className="font-medium">{complaintData.statusTip}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-sm text-muted-foreground">Registered Date</p>
              <p className="font-medium">{complaintData.registeredDate}</p>
            </div>

            <div className="border-b pb-3">
              <p className="text-sm text-muted-foreground">Completion By</p>
              <p className="font-medium">{complaintData.completionBy}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Complaint Status
              </p>
              <Badge variant="secondary">{complaintData.status}</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen">
      {activeView === "main" && renderMainMenu()}
      {activeView === "profile" && renderProfileSettings()}
      {activeView === "doorstep" && renderDoorstepService()}
      {activeView === "complaints" && renderComplaints()}
    </div>
  );
}
