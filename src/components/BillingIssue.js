import React, { useState } from "react";

const BillingIssue = () => {
  const [showInvoices, setshowInvoices] = useState(false);

  const handleViewInvoices = () => {
    setshowInvoices(true);
  };

  const invoices = [
    { id: 1, amount: 100, status: "UNPAID" },
    { id: 2, amount: 100, status: "UNPAID" },
    { id: 3, amount: 100, status: "PAID" },
    { id: 3, amount: 100, status: "PAID" },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[350px] p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-5 font-poppins font-semibold leading-9">
          Billing Problem{" "}
          <span className="inline-block transform rotate-[-15deg]">😅</span>
        </h1>
        <div className="leading-tight">
          <p className="text-red-500 mb-5 justify-center-text">
            It looks like your billing method on file may not be setup
            correctly.
          </p>
          <p className="text-center px-2">
            You have a <span className="font-semibold">$1,204.03</span> balance
            owing for longer than 20 days.
          </p>
        </div>

        {!showInvoices && (
          <>
            <button
              className="w-full bg-transparent text-blue-600 py-2 px-4 rounded mt-7 border border-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={handleViewInvoices}
            >
              View All Invoices
            </button>
          </>
        )}
        <table
          className={`w-full mt-5 border-collapse opacity-0 transition-opacity duration-500 ease-in-out ${
            showInvoices ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Invoice</th>
              <th className="border border-gray-300 px-4 py-2">Amount</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-gray-500 [&>*:nth-child(even)]:bg-blue-500">
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {invoice.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${invoice.amount}
                </td>
                <td
                  className={`border border-gray-300 px-4 py-2 ${
                    invoice.status === "PAID"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {invoice.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-3 hover:bg-blue-900">
          Fix Payment Method & Pay Now
        </button>
        <p className="text-center mt-5 text-xs px-6">
          Once the payment method is fixed and balance is paid, you’ll be able
          to access your account again.
        </p>
        <div className="space-x-2 text-center mt-5 text-xs px-6">
          <a
            href="mailto:henryookonkwo@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email Us
          </a>
          <span>|</span>
          <a
            href="https://givecloud.com/about/"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Chat
          </a>
        </div>
      </div>
    </div>
  );
};

export default BillingIssue;
