import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import type { Contest } from "../types";

const CreateContest: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, addContest } = useApp();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "app" as Contest["category"],
    prize: "",
    deadline: "",
    requirements: [""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addContest({
      title: formData.title,
      description: formData.description,
      category: formData.category,
      prize: parseInt(formData.prize),
      creatorId: currentUser.id,
      creator: currentUser,
      deadline: new Date(formData.deadline),
      status: "open",
      requirements: formData.requirements.filter((r) => r.trim() !== ""),
    });

    navigate("/");
  };

  const addRequirement = () => {
    setFormData((prev) => ({
      ...prev,
      requirements: [...prev.requirements, ""],
    }));
  };

  const updateRequirement = (index: number, value: string) => {
    const newRequirements = [...formData.requirements];
    newRequirements[index] = value;
    setFormData((prev) => ({ ...prev, requirements: newRequirements }));
  };

  const removeRequirement = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">Create Contest</h1>
        <p className="text-sm text-gray-600">
          Post a contest for apps, designs, websites, and more
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-4 max-w-2xl mx-auto">
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Contest Title *
          </label>
          <input
            type="text"
            id="title"
            required
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="e.g., E-commerce Mobile App Design"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description *
          </label>
          <textarea
            id="description"
            required
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Describe what you're looking for..."
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category *
          </label>
          <select
            id="category"
            required
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                category: e.target.value as Contest["category"],
              }))
            }
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="app">App Development</option>
            <option value="design">Design</option>
            <option value="website">Website</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Prize */}
        <div className="mb-4">
          <label
            htmlFor="prize"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Prize (in coins) *
          </label>
          <input
            type="number"
            id="prize"
            required
            min="1"
            value={formData.prize}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, prize: e.target.value }))
            }
            placeholder="e.g., 2500"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <p className="text-sm text-gray-500 mt-1">
            Your balance: {currentUser.coins} coins
          </p>
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Deadline *
          </label>
          <input
            type="date"
            id="deadline"
            required
            value={formData.deadline}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, deadline: e.target.value }))
            }
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Requirements
          </label>
          {formData.requirements.map((req, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={req}
                onChange={(e) => updateRequirement(index, e.target.value)}
                placeholder="e.g., Figma or Adobe XD files"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {formData.requirements.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRequirement(index)}
                  className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addRequirement}
            className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            + Add Requirement
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Create Contest
        </button>
      </form>
    </div>
  );
};

export default CreateContest;
