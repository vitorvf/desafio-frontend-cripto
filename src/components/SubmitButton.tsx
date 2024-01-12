export interface SubmitButtonProps {
    loading: boolean
}

export const SubmitButton = ({loading}: SubmitButtonProps) => (
    <button
      data-testid="add-crypto-button"
      type="submit"
      disabled={loading}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Add Crypto Asset
      </button>
)