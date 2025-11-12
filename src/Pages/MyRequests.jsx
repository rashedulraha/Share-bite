import { FaUser, FaMapMarkerAlt, FaCommentDots, FaPhone } from "react-icons/fa";

import Container from "../Components/Responsive/Container";

const RequestsTablePage = () => {
  return (
    <section className="py-16 bg-base-100 min-h-screen">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-base-content mb-3">
              Food <span className="text-primary">Requests</span>
            </h1>
            <p className="text-muted">
              Manage incoming requests for your donated food
            </p>
          </div>

          {/* Table Card */}
          <div className="bg-base-200/50 backdrop-blur-sm rounded-md shadow-xl border border-neutral/20 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-base-content mb-4">
                All Requests
              </h2>

              <div className="overflow-x-auto">
                <table className="table table-lg">
                  <thead>
                    <tr className="text-left text-base-content">
                      <th className="flex items-center gap-2">
                        <FaUser className="w-4 h-4" /> Requester
                      </th>
                      <th className="flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" /> Location
                      </th>
                      <th className="flex items-center gap-2">
                        <FaCommentDots className="w-4 h-4" /> Reason
                      </th>
                      <th className="flex items-center gap-2">
                        <FaPhone className="w-4 h-4" /> Contact
                      </th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RequestsTablePage;
